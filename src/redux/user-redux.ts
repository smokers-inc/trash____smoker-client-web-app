import ReduxUtil from "./redux-util";

export interface UserState {
  userId: string;
  email: string;
  name: string;
  photoUrl: string;
}

const getInitialState = (): UserState => ({
  userId: '',
  email: '',
  name: '',
  photoUrl: '',
});

const TYPE_PREFIX = 'USER';
const type = (t) => TYPE_PREFIX + t;

export const UserActions = {
  clear: () => ({type: type('clear')}),
  setUser: (user: Partial<UserState>) => ({
    type: type('setUser'),
    user: user,
  }),
};

const UserReducerDefinitions = {
  clear: () => getInitialState(),
  setUser: (state, action) => action.user,
};

const userReducer = ReduxUtil.createReducer(getInitialState(), UserReducerDefinitions, TYPE_PREFIX);

export {userReducer};
