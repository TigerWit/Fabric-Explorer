// import { stringify } from 'qs';
import request from '../utils/request';


export function getTxById(params) {
  return request(`/v1/api/gettxbyid?txid=${params}`);
}

export function getLastBlock() {
	return request(`/v1/fabric/getchannelinfo`);
}

export function getLastBlockList(num) {
	return request(`/v1/fabric/getlastblocks?num=${num}`);
}

export function getLaskTransactionList(num) {
	return request(`/v1/fabric/getlasttxs?num=${num}`);
}


export function getBlock(blocknum) {
	return request(`/v1/fabric/gettxsbyblocknum?blocknum=${blocknum}`);
}

