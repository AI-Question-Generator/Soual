export interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: 'member' | 'admin';
  first_name?: string;
  last_name?: string;
  dateJoined: string;
}
