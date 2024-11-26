export type TTokenResponse = {
  access_token: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TSignupPayload = {
  email: string;
  name: string;
  password: string;
};

export enum EAuthApiKey {
  LOGIN = 'auth.login',
  SIGNUP = 'auth.signup',
}
