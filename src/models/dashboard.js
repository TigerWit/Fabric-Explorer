import { all } from 'redux-saga/effects';
import { getLastBlock, getLastBlockList, getLaskTransactionList } from '../services/api';

export default {

  namespace: 'dashboard',

  state: {
  
  },

  effects: {
    *fetchLastBlock({ payload }, { call, put }) {
      const [result1, result2, result3]  = yield all([
        call(getLastBlock, payload),
        call(getLastBlockList, 30),
        call(getLaskTransactionList, 40),
      ])
      yield put({
        type: 'queryLastBlock',
        payload: result1.data.chain_info || {},
      });
      yield put({
        type: 'queryLastBlockList',
        payload: result2.data.blocks || {},
      });
      yield put({
        type: 'queryLastTransactionList',
        payload: result3.data.transactions || {},
      });

    },
    *fetchLastBlockList({ payload }, { call, put }) {
      const response = yield call(getLastBlockList, payload);
      yield put({
        type: 'queryLastBlockList',
        payload: response.data.chain_info || {},
      });
    },
  },

  reducers: {
    queryLastBlock(state, action) {
      return {
        ...state,
        lastBlock: action.payload,
      };
    },
    queryLastBlockList(state, action) {
      return { 
        ...state,
        blocks: action.payload,
      };
    },
    queryLastTransactionList(state, action) {
      return { 
        ...state,
        transactions: action.payload,
      };
    }
  },

};
