
/**
User opens app
↓
AuthProvider loads session
↓
Root checks session
↓
❌ No session → AuthNavigator → LoginScreen
↓
OTP verified
↓
Supabase creates session
↓
AuthContext updates
↓
Root re-renders
↓
✅ AppNavigator → Files screen
↓
Navigation used normally inside app
*/

Files Tab
   ↓
Home Screen
   ↓ Upload → Picker
   ↓ Drive  → Storage Grid
   ↓ Click → Preview
