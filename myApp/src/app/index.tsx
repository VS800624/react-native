import HomeScreen from '@/screens/HomeScreen';
import LoginScreen from '@/screens/LoginScreen';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
// import { auth } from 'supabase/client';
import { supabase } from 'supabase/client';


export default function App(){
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return session ? <HomeScreen /> : <LoginScreen />;
}
