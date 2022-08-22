import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    // url: "https://my-json-server.typicode.com/atothey/demo/user"
    url:"http://localhost:8081/users"
  })
}

export function requestCreateUser(data) {
  return axios.request({
    method: "post",
    url:"http://localhost:8081/users",
    data:data ,
  })
}

export function requestDeleteUser(data) {
  return axios.request({
    method: "delete",
    url:"http://localhost:8081/users/" + data.id,
    // data:data ,
  })
}

export function requestUpdateUser(data) {
  return axios.request({
    method: "put",
    url:"http://localhost:8081/users/" + data.id,
    data:data,
  })
} 
