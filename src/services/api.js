// import { stringify } from 'qs';
import request from '../utils/request';


export function getTxByid(params) {
  return request(`/api/gettxbyid?txid=${params}`);
}
