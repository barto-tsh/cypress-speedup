export type LoginArguments = {
  username: string;
  password: string;
};

export type LoginResponse = {
  key: string;
};

export type LogoutResponse = {
  detail: string;
};

export type RegisterArguments = {
  username: string;
  password1: string;
  password2: string;
  email?: string;
};
