import { AuthUser } from './auth-user.model';

export interface RegisterResponse {
  message: string;
  user: AuthUser;
}
