import firebase from 'firebase/app';
import {FirebaseFunctions} from "./functions/firebase-functions";
import {EnvDef} from "../../env";

export default class Firebase {
  public static init = (env: EnvDef, envData: {
    apiHost: string,
    serviceAccount: any,
  }) => {
    FirebaseFunctions.init(envData.apiHost);
    const app = firebase.initializeApp(envData.serviceAccount);
    // 環境情報がLOCALの時はエミュレータを利用しローカルのfunctionsに向ける
    if (env === EnvDef.LOCAL) {
      app.functions().useFunctionsEmulator('http://localhost:5000');
    }
  };
}
