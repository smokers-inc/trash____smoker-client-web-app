import React, {useEffect} from 'react';
import './App.css';
import Env, {EnvDef} from "./env";
import {Provider} from "react-redux";
import store from "./redux/store";
import Loadable from 'react-loadable';
import {ReduxConnectorComponent} from "./redux/ReduxConnector";
import {ThemeProvider} from "@material-ui/styles";
import {DefaultTheme} from "./styles/theme";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./screens/login/Login";

const App: React.FC = () => {
  // 初期設定系の読み込みはここ
  useEffect(() => {
    Env.init(EnvDef.DEVELOPMENT);
  }, []);
  return (
    <Provider store={store}>
      <ReduxConnectorComponent/>
      <ThemeProvider theme={DefaultTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path={'/login'} component={Loadable({
              loader: () => import('./screens/login/Login'),
              loading: () => (<div/>),
            })}/>
            <Login/>
            {/*
            認証通った後の画面は下記でroutingする
            <Auth>
              <Route path={'/'} component={Layout}/>
            </Auth>
            */}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
