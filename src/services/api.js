// import { stringify } from 'qs';
import request from '../utils/request';


export function getTxByid(params) {
  return request(`/v1/api/gettxbyid?txid=${params}`);
}
