export interface IUser {
  email: string;
  password: string;
  salt: string;
  username: string;
  firstName?: string;
  lastName?: string;
}
