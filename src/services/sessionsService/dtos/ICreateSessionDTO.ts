export interface ICreateSessionDTO {
  token: string;
  refresh_token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}
