import { API_URL } from 'app/api/constants.ts';
import type { PostLoginProps } from './types.ts';

export const postLogin = async (data: PostLoginProps) => {
  return await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
};

export const postLogout = async () => {
  return await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
};
