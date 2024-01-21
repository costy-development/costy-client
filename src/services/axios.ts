import { LocaleStorage as s } from "@/utils";
import { API_ENDPOINT } from "@/config/env";
import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";
import { JwtPayload, jwtDecode as decode } from "jwt-decode";

const axiosPublicQuery = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
});

const axiosPrivateQuery = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
});

const axiosPrivateFormDataQuery = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

let refreshTokenPromise: any = null;

axiosPrivateQuery.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => exchangeToken(config)
);

axiosPrivateFormDataQuery.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => exchangeToken(config)
);

function exchangeToken(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  const token = s.getJWT();

  const decodedUser: JwtPayload | null = token ? decode(token) : null;

  if (!decodedUser) return config;

  const exp = decodedUser.exp;
  const isExpired = Math.floor(Date.now() / 1000) > exp!;

  if (isExpired) {
    if (!refreshTokenPromise)
      refreshTokenPromise = axiosPublicQuery
        .post("/auth/refresh")
        .then(({ data }) => data.accessToken)
        .catch((error: AxiosError) => {
          if (error.response?.status === 401) s.removeJWT();
          return "";
        })
        .finally(() => (refreshTokenPromise = null));

    return refreshTokenPromise.then((token: string) => {
      s.setJWT(token);
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

export { axiosPublicQuery, axiosPrivateQuery, axiosPrivateFormDataQuery };
