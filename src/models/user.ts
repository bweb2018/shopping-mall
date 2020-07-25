import { queryCurrent } from '@/service/user';
import { Effect, Reducer } from 'umi';

interface CurrentUser {
  name?: string;
  icon?: string;
  userid?: string;
}
export interface UserModelState {
  currentUser: CurrentUser;
}
export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrentUser: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
  };
}
const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrentUser(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({ type: 'saveCurrentUser', payload: response });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: { ...action.payload } || {} };
    },
  },
};
export default UserModel;
