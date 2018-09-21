// import { stringify } from 'qs';
import request from '../utils/request';


export function getTxById(txid) {
  return request(`/api/gettxbyid?txid=${txid}`);
}

export function getLastBlock() {
	return request(`/fabric/getchannelinfo`);
}

export function getLastBlockList(num) {
	return request(`/fabric/getlastblocks?num=${num}`);
}

export function getLaskTransactionList(num) {
	return request(`/fabric/getlasttxs?num=${num}`);
}


export function getBlock(blocknum) {
	return request(`/fabric/gettxsbyblocknum?blocknum=${blocknum}`);
}

