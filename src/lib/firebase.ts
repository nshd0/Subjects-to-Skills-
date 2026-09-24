import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let firestoreInstance = null;
try {
  firestoreInstance = firebaseConfig.firestoreDatabaseId
    ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
    : getFirestore(app);
} catch (err) {
  console.warn('Failed to initialize custom Firestore database, falling back to default:', err);
  try {
    firestoreInstance = getFirestore(app);
  } catch (err2) {
    console.error('Fatal Firestore initialization error:', err2);
    firestoreInstance = null;
  }
}

let authInstance: Auth | null = null;
let googleProviderInstance: GoogleAuthProvider | null = null;
try {
  authInstance = getAuth(app);
  googleProviderInstance = new GoogleAuthProvider();
} catch (authErr) {
  console.warn('Firebase Auth initialization fallback (e.g. restricted iframe environment):', authErr);
}

export const db = firestoreInstance as ReturnType<typeof getFirestore>;
export const auth = authInstance as Auth;
export const googleProvider = googleProviderInstance as GoogleAuthProvider;

