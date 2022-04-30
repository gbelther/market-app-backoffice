import { AxiosResponse } from "axios";
import { KEY_USER } from "../../utils/storage/keys";
import { api } from "../api";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";

interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

interface IUserStorage {
  id: string;
  name: string;
  email: string;
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

  public static setUserToStorage({ id, name, email }: IUserStorage): void {
    localStorage.setItem(
      KEY_USER,
      JSON.stringify({
        id,
        name,
        email,
      })
    );
  }

  public static getUserFromStorage(): IUserStorage | null {
    const userStorage = localStorage.getItem(KEY_USER);

    if (userStorage) {
      return JSON.parse(userStorage) as IUserStorage;
    }

    return null;
  }

  public static deleteUserFromStorage() {
    localStorage.removeItem(KEY_USER);
  }
}

export { UsersService };
