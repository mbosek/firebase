import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyADdt1MbGKSCRs_YYxr2_HRrMgIYmFbUMQ",
  authDomain: "hr-opstalent.firebaseapp.com",
  databaseURL: "https://hr-opstalent.firebaseio.com",
  storageBucket: "hr-opstalent.appspot.com"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
