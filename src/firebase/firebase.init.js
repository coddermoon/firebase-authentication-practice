import { initializeApp } from "firebase/app";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDLprtEqdPtV3kwrmIJ94bkGRw1X-G_4yI",
  authDomain: "authentication-reacp.firebaseapp.com",
  projectId: "authentication-reacp",
  storageBucket: "authentication-reacp.appspot.com",
  messagingSenderId: "504996726840",
  appId: "1:504996726840:web:a08db684ff2885c6b03ecd",
};

const app = initializeApp(firebaseConfig);

export default app;
