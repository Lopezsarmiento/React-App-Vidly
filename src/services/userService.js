import http from "./httpService";
import config from "../config.json";

const apiEndpoint = "/users";

export function register(user) {
  console.log("user in service", user);
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
