export interface EditUserResponse {
  message: string;
  user: {
    first_name: string;
    last_name: string;
    email: string;
  };
}
