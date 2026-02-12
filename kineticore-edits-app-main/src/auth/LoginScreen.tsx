import { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { supabase } from '../supabase/client';
import CenteredScreen from '../components/CenteredScreen';
import { styles } from '../styles/LoginScreen.styles';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'send' | 'verify'>('send');
  const [loading, setLoading] = useState(false);

  // const sendOtp = async () => {
  //   const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;
  //   setLoading(true);
  //   const { error } = await supabase.auth.signInWithOtp({ phone });  //Supabase sends OTP to the phone number
  //   setLoading(false);

  //   if (error) {
  //     Alert.alert(error.message);
  //     return;
  //   }

  //   setStep('verify');
  // };
  // What happens: 
  //  Supabase sends OTP to the phone number
  // If success → step = "verify"
  // UI shown:
  // Phone input, "Send OTP" button

  // const verifyOtp = async () => {
  //   setLoading(true);
  //   const { error } = await supabase.auth.verifyOtp({
  //     phone,
  //     token: otp,
  //     type: 'sms',
  //   });
  //   setLoading(false);

  //   if (error) Alert.alert(error.message);
  //   // session update will trigger Root()
  // };
  // What happens:
  // Supabase verifies OTP
  // If correct:
  // Supabase creates a session
  // AuthContext listener fires
  // session becomes non-null
  // Root switches to AppNavigator

    const sendOtp = async () => {
      const formattedPhone = phone.startsWith('+')
      ? phone
      : `+91${phone}`;

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      phone: formattedPhone,
      options: { channel: 'sms' },
    });
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setStep('verify');
  };

  const verifyOtp = async () => {
    const formattedPhone = phone.startsWith('+')
      ? phone
      : `+91${phone}`;

    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      phone: formattedPhone,
      token: otp,
      type: 'sms',
    });
    setLoading(false);

    if (error) alert(error.message);
  };

  return (
    <CenteredScreen>
      <View style={styles.container}>
        <View style={styles.card}>
          {step === 'send' ? (
            /* ---------- SEND OTP UI ---------- */
            <>
              <Text style={styles.title}>Login with Phone</Text>

              <TextInput
                style={styles.input}
                placeholder="+91XXXXXXXXXX"
                placeholderTextColor="#999"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                editable={!loading}
              />

              <View style={styles.button}>
                <Text style={styles.buttonText} onPress={sendOtp}>
                  {loading ? 'Sending...' : 'Send OTP'}
                </Text>
              </View>
            </>
          ) : (
            /* ---------- VERIFY OTP UI ---------- */
            <>
              <Text style={styles.secondaryText}>
                OTP sent to {phone}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Enter OTP"
                placeholderTextColor="#999"
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
                editable={!loading}
              />

              <View style={styles.button}>
                <Text style={styles.buttonText} onPress={verifyOtp}>
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </CenteredScreen>
  );
}