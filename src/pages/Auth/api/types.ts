import type { BaseApiResponse } from 'app/api/types.ts';

export interface PostLoginProps {
  uniqId: string;
  password: string;
}

export interface LoginResponseProps extends BaseApiResponse {
  accessToken: string;
}
