import { User } from 'api/types/User.types';

const ACCESS_TOKEN_KEY = 'accessToken';
const USER_KEY = 'user';
class AuthStorage {
  private _accessToken: string | null = null;
  private _user: User | null = null;
  constructor() {
    try {
      this.accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
      this.user = JSON.parse(sessionStorage.getItem(USER_KEY) || 'null');
    } catch (error) {
      this.accessToken = null;
      this.user = null;
    }
  }

  get accessToken(): string | null {
    return this._accessToken;
  }

  set accessToken(value: string | null) {
    this._accessToken = value;

    try {
      if (typeof value === 'string') {
        sessionStorage.setItem(ACCESS_TOKEN_KEY, value);
      } else {
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      }
    } catch (error) {}
  }

  get user(): User | null {
    return this._user;
  }

  set user(value: User | null) {
    this._user = value;

    try {
      if (value) {
        sessionStorage.setItem(USER_KEY, JSON.stringify(value));
      } else {
        sessionStorage.removeItem(USER_KEY);
      }
    } catch (error) {}
  }
}

export const authStorage = new AuthStorage();
