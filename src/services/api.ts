import axios from "axios";
import { ICreateSessionDTO } from "./sessionsService/dtos/ICreateSessionDTO";
import { TokenService } from "./tokenService";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use((config) => {
  const tokens = TokenService.getTokenFromStorage();

  if (tokens && tokens.token && config.headers) {
    config.headers["authorization"] = `Bearer ${tokens.token}`;
  }

  return config;
});

api.interceptors.response.use((success) => {
  const { config, data } = success;

  if (config.url?.includes("/sessions") && config.method === "post") {
    const { token, refresh_token } = data as ICreateSessionDTO;
    TokenService.setTokenToStorage({
      token,
      refresh_token,
    });
  }

  return success;
});

export { api };
