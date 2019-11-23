/**
 * 環境情報を管理するファイル
 * LOCAL: ローカルに立てたfirebase functionsを利用したい時
 * DEVELOPMENT: 開発環境用のプロジェクト
 * STAGING: ステージング用のプロジェクト（利用なし）
 * PRODUCTION: 本番環境用のプロジェクト（利用なし）
 */
export enum EnvDef {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  // STAGING = 'staging',
  // PRODUCTION = 'production',
}
enum FirebaseDef {
  dev = 'dev',
  local = 'local',
  // staging = 'staging',
  // production = 'production',
}
type FirebaseEnv = {
  serviceAccount: any,
  apiHost: string,
};
// TODO この辺はfirebaseのプロジェクト作成して設定完了してから追記する
const firebase: {
  [K in FirebaseDef]: FirebaseEnv
} = {
  local: {
    apiHost: 'http://localhost:5000/smokers-dev/us-central1',
    serviceAccount: {
      apiKey: "",
      databaseURL: "https://smokers-dev.firebaseio.com",
      storageBucket: "smokers-dev.appspot.com",
      authDomain: "smokers-dev.firebaseapp.com",
      messagingSenderId: "",
      projectId: "smokers-dev",
    },
  },
  dev: {
    apiHost: 'https://us-central1-smokers-dev.cloudfunctions.net',
    serviceAccount: {
      apiKey: "",
      databaseURL: "https://smokers-dev.firebaseio.com",
      storageBucket: "smokers-dev.appspot.com",
      authDomain: "smokers-dev.firebaseapp.com",
      messagingSenderId: "",
      projectId: "smokers-dev",
    },
  },
};

/**
 * 現状、環境ごとに依存する設定項目はfirebaseくらいだが、今後増える可能性も考慮して下記のように定義しておく
 */
const envSelection: { [k in EnvDef]: { firebase: FirebaseEnv } } = {
  [EnvDef.LOCAL]: {
    firebase: firebase.local,
  },
  [EnvDef.DEVELOPMENT]: {
    firebase: firebase.dev,
  },
};

export default class Env {
  public static init = (env: EnvDef) => {
    const envData = envSelection[env];
    // クライアントサイドのfirebaseはenvによって分岐が入るのでinitの中で分岐する
    // Firebase.init(env, envData.firebase);
  }
}
