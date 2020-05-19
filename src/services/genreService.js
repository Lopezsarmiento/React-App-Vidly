import http from "./httpService";
import config from "../config.json";

const apiEndpoint = "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
