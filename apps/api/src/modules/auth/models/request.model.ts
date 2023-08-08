import { PayloadToken } from './token.model';

export interface IRequestUser extends Request {
  user: PayloadToken;
}

export type IAuthRequest = IRequestUser & {
  headers: { authorization: string };
};
