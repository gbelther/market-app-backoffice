import { AxiosResponse } from "axios";
import { api } from "../api";
import { ICreateSessionDTO } from "./dtos/ICreateSessionDTO";

interface ICreateSessionParams {
  email: string;
  password: string;
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
}

export { SessionsService };
