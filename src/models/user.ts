import type { Effect, Reducer } from 'umi';
import { stringify } from 'querystring';
import { setAuthority } from '@/utils/authority';
import { history } from 'umi';
import { fakeAccountLogin } from '@/services/login';
import { getPageQuery } from '@/utils/utils';
import { message } from 'antd';
import {saveUser,getUser,removeUser} from '@/utils/token'
import { queryCurrent, query as queryUsers } from '@/services/user';
// TODO 合并user和login
export type CurrentUser = {
  avatar?: string;
  name?: string;
  title?: string;
  group?: string;
  signature?: string;

  userid?: string;

  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
};

export type UserModelState = {
  currentUser?: CurrentUser;
};

export type StateType = {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
};

export type UserModelType = {
  
  namespace: String;
  state: UserModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
    login: Effect;
    logout: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
    changeNotifyCount: Reducer<UserModelState>;
    changeLoginStatus: Reducer<StateType>;
  };
};
// TODO dva here @umijs/plugin-model  & current user here
const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {
      currentAuthority:"guest"
    },
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = getUser();
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
    },
    *login({ payload }, { call, put }) {
      // TODO 查看这里在mock环境下的数据
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      console.log(response)
      // Login successfully
      if (response.status === 'ok') {
        saveUser(response)
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        message.success('🎉 🎉 🎉  登录成功！');
        let { redirect } = params as { redirect: string };
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }
        history.replace(redirect || '/');
      }
    },

    logout() {
      removeUser();
      const { redirect } = getPageQuery();

      // Note: There may be security issues, please note
      if (window.location.pathname !== '/user/login' && !redirect) {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },


  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};

export default UserModel;
