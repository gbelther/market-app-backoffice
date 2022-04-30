import axios, { AxiosError } from "axios";
import { AppError } from "../errors/appError/AppError";
import { SessionsService } from "./sessionsService";
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

api.interceptors.response.use(
  (success) => {
    const { config, data } = success;

    if (config.url?.includes("/sessions") && config.method === "post") {
      const { token, refresh_token } = data as ICreateSessionDTO;
      TokenService.setTokenToStorage({
        token,
        refresh_token,
      });
    }

    return success;
  },
  async (error: AxiosError) => {
    const config = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      config.url !== "/refresh-token"
    ) {
      try {
        const tokensStorage = TokenService.getTokenFromStorage();

        if (!tokensStorage?.refresh_token) {
          throw new AppError("Refresh Token não encontrado!");
        }

        const response = await SessionsService.refreshToken({
          refreshToken: tokensStorage.refresh_token,
        });

        TokenService.setTokenToStorage({
          token: response.data.token,
          refresh_token: response.data.refresh_token,
        });

        return api(config);
      } catch (error) {
        TokenService.logout();
        document.location.reload();
      }
    }
  }
);

export { api };
