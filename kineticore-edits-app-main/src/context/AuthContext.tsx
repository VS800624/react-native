import React, {createContext, useState, useEffect} from "react"
import {supabase} from '../supabase/client'

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({children}: any) => {
    const [session, setSession] = useState<any>(null);   // stores logged-in user info
    const [loading, setLoading] = useState(true);          

    useEffect(() => {
        supabase.auth.getSession().then(({data}) => {
            setSession(data.session);
            setLoading(false);
        })
        // Checks if user is already logged in
        // If yes → saves session
        // If no → session = null

        // Auth Listener
        const {data: listener} = supabase.auth.onAuthStateChange(
            (_event, session) => setSession(session)
        );
        // Runs automatically when:
        // User logs in
        // User logs out
        // This is why you don’t manually navigate after OTP verify

        // cleanup function
        return () => listener.subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{session, loading}}>
            {children}
        </AuthContext.Provider>
    )
}


// What is happening here?
// AuthProvider
// → Stores login session globally (like a user wallet)

// NavigationContainer
// → Required by React Navigation

// Root
// → Decides which app to show
// Login screens 
// OR Main app screens 