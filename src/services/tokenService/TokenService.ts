import { KEY_TOKENS } from "../../utils/storage/keys";
import { UsersService } from "../usersService";

interface ISetTokenToStorageParams {
  token: string;
  refresh_token: string;
}

interface ITokens {
  token: string;
  refresh_token: string;
}

class TokenService {
  public static setTokenToStorage({
    token,
    refresh_token,
  }: ISetTokenToStorageParams): void {
    localStorage.setItem(
      KEY_TOKENS,
      JSON.stringify({
        token,
        refresh_token,
      })
    );
  }

  public static getTokenFromStorage(): ITokens | null {
    const tokens = localStorage.getItem(KEY_TOKENS);

    if (tokens) {
      return JSON.parse(tokens) as ITokens;
    }

    return null;
  }

  public static logout(): void {
    localStorage.removeItem(KEY_TOKENS);
    UsersService.deleteUserFromStorage();
  }
}

export { TokenService };
