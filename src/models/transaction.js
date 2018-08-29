import { getTxByid } from '../services/api';

export default {

  namespace: 'transaction',

  state: {},

  effects: {
    *fetchTransaction({ payload }, { call, put }) {
      const response = yield call(getTxByid, payload);
      yield put({
        type: 'queryTransaction',
        payload: response,
      });
    },
  },

  reducers: {
    queryTransaction(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
