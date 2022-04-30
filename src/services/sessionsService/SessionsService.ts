import { AxiosResponse } from "axios";
import { api } from "../api";
import { ICreateSessionDTO } from "./dtos/ICreateSessionDTO";
import { IRefreshTokenDTO } from "./dtos/IRefreshTokenDTO";

interface ICreateSessionParams {
  email: string;
  password: string;
}

interface IRefreshTokenParams {
  refreshToken: string;
}

class SessionsService {
  public static async createSession({
    email,
    password,
  }: ICreateSessionParams): Promise<AxiosResponse<ICreateSessionDTO>> {
    return await api.post<ICreateSessionDTO>("/sessions", {
      email,
      password,
    });
  }

  public static async refreshToken({
    refreshToken,
  }: IRefreshTokenParams): Promise<AxiosResponse<IRefreshTokenDTO>> {
    return await api.post<IRefreshTokenDTO>("/refresh-token", {
      token: refreshToken,
    });
  }
}

export { SessionsService };
