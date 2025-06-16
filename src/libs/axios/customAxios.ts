import axios, { AxiosRequestConfig } from "axios";
import { requestInterceptor } from "./requestInterceptor";
import {responseErrorInterceptor} from "src/libs/axios/responseErrorInterceptor";
import { REQUEST_TOKEN, ACCESS_TOKEN } from "src/constants/token/token.constants";
import Token from "src/libs/token/cookie";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const createCustomAxiosInstance = (baseURL?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.create({
    ...baseConfig,
    ...baseURL,
    withCredentials: true,
  });
};

export const mullateAxios = createCustomAxiosInstance({
  baseURL: SERVER_URL,
  headers: {
    [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`!,
  },
});

mullateAxios.interceptors.request.use((response)=>response,requestInterceptor);
mullateAxios.interceptors.response.use((response)=>response, responseErrorInterceptor);

export default mullateAxios;
