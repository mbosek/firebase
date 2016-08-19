import { AngularFireModule, AuthMethods } from 'angularfire2';
import { FbConfig } from './credentials';

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};

export const FirebaseModule = AngularFireModule.initializeApp(FbConfig, firebaseAuthConfig);
