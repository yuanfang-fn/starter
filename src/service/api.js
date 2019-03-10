import request from '../utils/request';
import { parse, stringify } from 'qs';

export async function login(params) {
    return request('/api/login/account', {
      method: 'POST',
      body: params,
    });
  }
  export async function getUser(params) {
    return request(`/api/fake_list?${stringify(params)}`);
  }