import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  console.log(params)
  return request('http://www.hanhuikrkr.com:8108/user/login', {
  // return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}
