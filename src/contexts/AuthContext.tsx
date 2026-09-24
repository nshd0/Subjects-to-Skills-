import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';
import { UserProfileDoc } from '../data/models';

interface AuthContextType {
  user: User | null;
  profile: UserProfileDoc | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfileDoc | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (!auth) {
      console.warn("Auth is unavailable in this environment (e.g. restricted sandbox); proceeding in guest mode.");
      setLoading(false);
      return;
    }

    try {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (!isMounted) return;
        setUser(currentUser);
        
        if (currentUser && db) {
          try {
            // Fetch or create user profile
            const userRef = doc(db, 'users', currentUser.uid);
            const userSnap = await getDoc(userRef);
            
            if (userSnap.exists()) {
              const data = userSnap.data() as UserProfileDoc;
              if (currentUser.email === 'nshdshaikh07@gmail.com' && data.role !== 'admin') {
                await setDoc(userRef, { ...data, role: 'admin', updatedAt: serverTimestamp() as any });
                if (isMounted) setProfile({ ...data, role: 'admin' });
              } else {
                if (isMounted) setProfile(data);
              }
            } else {
              // Create new default profile (teacher or admin)
              const newProfile: UserProfileDoc = {
                role: currentUser.email === 'nshdshaikh07@gmail.com' ? 'admin' : 'teacher',
                email: currentUser.email || '',
                displayName: currentUser.displayName || '',
                createdAt: serverTimestamp() as any,
                updatedAt: serverTimestamp() as any,
              };
              await setDoc(userRef, newProfile);
              if (isMounted) setProfile(newProfile);
            }
          } catch (profileErr) {
            console.warn("Could not sync profile to Firestore, falling back to local session:", profileErr);
            if (isMounted) {
              setProfile({
                role: currentUser.email === 'nshdshaikh07@gmail.com' ? 'admin' : 'teacher',
                email: currentUser.email || '',
                displayName: currentUser.displayName || '',
                createdAt: new Date() as any,
                updatedAt: new Date() as any,
              });
            }
          }
        } else if (currentUser) {
          if (isMounted) {
            setProfile({
              role: currentUser.email === 'nshdshaikh07@gmail.com' ? 'admin' : 'teacher',
              email: currentUser.email || '',
              displayName: currentUser.displayName || '',
              createdAt: new Date() as any,
              updatedAt: new Date() as any,
            });
          }
        } else {
          if (isMounted) setProfile(null);
        }
        if (isMounted) setLoading(false);
      }, (authError) => {
        console.error("onAuthStateChanged error:", authError);
        if (isMounted) setLoading(false);
      });

      return () => {
        isMounted = false;
        unsubscribe();
      };
    } catch (e) {
      console.error("Auth initialization error:", e);
      if (isMounted) setLoading(false);
    }
  }, []);

  const login = async () => {
    if (!auth || !googleProvider) {
      console.warn("Authentication is not supported in this iframe environment.");
      return;
    }
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
