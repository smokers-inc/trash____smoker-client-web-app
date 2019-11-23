import React, {useCallback, useEffect, useState} from 'react';
import MobileScreen from "../../components/layout/default-screen/MobileScreen";
import {Typography} from "@material-ui/core";

// ログイン画面用 state型定義
interface LoginState {
  email: string;
  password: string;
}

const Login: React.FC<{}> = () => {
  // 画面で利用するstate定義, useStateの引数の中に初期値
  const [loginState, setLoginState] = useState<LoginState>({
    email: '',
    password: '',
  });
  useEffect(() => {
    // componentDidMountで行いたい初期処理はここ
  }, []);
  // ログイン処理はここ
  const onClickLogin = useCallback(() => {
  }, []);
  return (
    <MobileScreen>
      <Typography>ログイン用コンポーネントをここに置く</Typography>
    </MobileScreen>
  );
};

export default React.memo(Login);
