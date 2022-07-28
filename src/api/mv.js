import request from "../utils/request";

//获取mv
export function getAllMv(data) {
  return request({
    url: "mv/all",
    method: "get",
    data: data,
  });
}

//获取最新mv
export function getMv(data) {
  return request({
    url: "mv/first",
    method: "get",
    data: data,
  });
}
