import { DEV_MODE, ENV_API_URL } from 'app/config/constants.ts';

export const API_URL = DEV_MODE ? 'http://localhost:3001/api' : ENV_API_URL;

export const REFRESH_TOKEN_URL = '/auth/refresh-token';

export enum STATUS {
  SUCCESS = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  CLIENT_ERRORS = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE = 422,
  SERVER_ERRORS = 500,
}

export enum QueryKeys {
  GetShopsList = 'getShopsList',
}
