import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let app = null;
let analyticsPromise = null;

if (firebaseConfig.apiKey) {
  try {
    app = initializeApp(firebaseConfig);
    analyticsPromise = isSupported()
      .then((supported) => (supported ? getAnalytics(app) : null))
      .catch(() => null);
  } catch (err) {
    console.error("Firebase initialization failed:", err);
  }
} else if (import.meta.env.DEV) {
  console.warn(
    "Firebase config missing. Set VITE_FIREBASE_* env vars to enable analytics."
  );
}

/**
 * Safely log an analytics event. No-op if analytics is not initialized
 * (e.g., missing config, unsupported environment, ad-blockers).
 */
export const trackEvent = async (eventName, params) => {
  if (!analyticsPromise) return;
  try {
    const analytics = await analyticsPromise;
    if (analytics) {
      logEvent(analytics, eventName, params);
    }
  } catch {
    // Silently ignore analytics errors - they should never break the app
  }
};

export { app };
