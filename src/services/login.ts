import request from '@/utils/request';

export type LoginParamsType = {
 uid: string;
  password: string;
  mobile: string;
  captcha: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  console.log(params)
  return request('http://localhost:8108/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
