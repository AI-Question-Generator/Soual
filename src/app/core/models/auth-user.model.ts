export interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: 'student' | 'teacher';
  firstName?: string;
  lastName?: string;
}
