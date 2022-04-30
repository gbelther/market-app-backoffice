import { AxiosResponse } from "axios";
import { api } from "../api";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";

interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

class UsersService {
  public static async createUser({
    name,
    email,
    password,
  }: ICreateUserParams): Promise<AxiosResponse<ICreateUserDTO>> {
    return api.post<ICreateUserDTO>("/users", {
      name,
      email,
      password,
    });
  }
}

export { UsersService };
