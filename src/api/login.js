import request from "../utils/request";


//登录
export function login(phone, password) {
  const data = {
    phone,
    password,
  };
  return request({
    url: "/login",
    method: "post",
    data: data,
  });
}
