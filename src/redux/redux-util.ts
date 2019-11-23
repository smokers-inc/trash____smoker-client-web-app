import {Action} from "redux";

export default class ReduxUtil {
  public static createReducer = (initialState: {}, reducerFunctions, prefix) => (state = initialState, action: Action<any>) => {
    const actionName = action.type.replace && action.type.replace(prefix, '');
    const func = reducerFunctions[actionName];
    if (!func) return state;
    return func(state, action);
  };

  public static actionToDispatch = (dispatch, actions) => {
    const dispatches = {};
    for (const actionName of Object.keys(actions)) {
      dispatches[actionName] = (...input) => dispatch(actions[actionName](...input));
    }
    return dispatches;
  };
}
