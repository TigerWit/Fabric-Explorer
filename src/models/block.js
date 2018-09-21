import { getBlock } from '../services/api';

export default {

  namespace: 'block',

  state: {},

  effects: {
    *fetchBlock({ payload }, { call, put }) {
      const response = yield call(getBlock, payload);
      yield put({
        type: 'queryBlock',
        payload: response.data,
      });
    },
  },

  reducers: {
    queryBlock(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
