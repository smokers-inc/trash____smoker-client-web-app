import * as React from "react";
import {connect} from 'react-redux';
import {UserActions, UserState} from "./user-redux";
import ReduxUtil from "./redux-util";

/**
 * Partial<Store>であることを明示したい。書き方忘れた。
 */
interface ConnectedStore {
  user: UserState,
}

interface Actions {
  user: typeof UserActions,
}

interface P {
  store?: ConnectedStore,
  dispatch?,
}

const mapStateToProps = (state: ConnectedStore): { store: ConnectedStore } => ({
  store: {
    user: state.user,
  },
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: {
    user: ReduxUtil.actionToDispatch(dispatch, UserActions),
  },
});

/**
 * reduxを利用するときはこれを任意の場所から呼ぶ
 */
export default class Redux {
  public static actions: Actions;
  public static getStore: () => ConnectedStore;
}

/**
 * App直下にマウントしておくもの
 * このクラスのpropsにreduxを繋げ、上記Reduxクラスを経由してstaticに呼び出す
 */
// tslint:disable-next-line:max-classes-per-file
class ReduxConnector extends React.Component<P> {
  constructor(props) {
    super(props);
    Redux.actions = this.props.dispatch!;
    Redux.getStore = () => this.props.store!;
  }

  public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} |
    React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return null;
  }
}

export const ReduxConnectorComponent = connect(mapStateToProps, mapDispatchToProps)(ReduxConnector);
