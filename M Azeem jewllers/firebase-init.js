// Firebase Realtime Database init (compat SDK).
// Paste your Firebase config in window.FIREBASE_CONFIG on the page before this runs.
(function () {
    if (!window.FIREBASE_CONFIG) {
        console.warn('Firebase config missing. Realtime features are disabled.');
        return;
    }
    if (!window.firebase || !window.firebase.initializeApp) {
        console.warn('Firebase SDK not loaded. Realtime features are disabled.');
        return;
    }

    try {
        window.firebaseApp = window.firebase.initializeApp(window.FIREBASE_CONFIG);
        window.firebaseDb = window.firebase.database();
        console.log('Firebase initialized.');
    } catch (err) {
        console.error('Firebase init failed:', err);
    }
})();
