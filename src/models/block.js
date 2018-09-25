import { getBlock } from '../services/api';

export default {

  namespace: 'block',

  state: {
    isLoading: false,
  },

  effects: {
    *fetchBlock({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });

      const response = yield call(getBlock, payload);
      yield put({
        type: 'queryBlock',
        payload: response.data,
      });

      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    queryBlock(state, action) {
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
