import { getTxById } from '../services/api';

export default {

  namespace: 'transaction',

  state: {
    isLoading: false,
  },

  effects: {

    *fetchTransaction({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });

      const response = yield call(getTxById, payload);
      yield put({
        type: 'queryTransaction',
        payload: response,
      });
      
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    queryTransaction(state, action) {
      return { ...state, ...action.payload };
    },
    changeLoading(state, action) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },

};
