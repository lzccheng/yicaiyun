import axios from "axios";

const instance = axios.create();

//超时
instance.defaults.timeout = 5000;
//baseURL
instance.defaults.baseURL = "http://agentapiuser.guocaiapi.com";

//拦截器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return [null, res.data];
    }
    return [res, null];
  },
  err => {
    return [err, null];
  }
);

const request = method => {
  return _opt => {
    const commonOpt = {
      headers: {
        AuthGC: `wang.gch5.com`,
        FROMWAY: 4
      }
    };
    const opt = {
      method,
      ...commonOpt,
      ..._opt
    };
    return instance(opt);
  };
};

export const GET = request("get");
export const POST = request("post");
export const DELETE = request("delete");
export const PUT = request("put");
export const HEAD = request("head");
