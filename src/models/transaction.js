import { getTxById } from '../services/api';

export default {

  namespace: 'transaction',

  state: {},

  effects: {
    *fetchTransaction({ payload }, { call, put }) {
      const response = yield call(getTxById, payload);
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
