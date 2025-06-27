import { API_URL } from 'app/api/constants.ts';
import type { PostLoginProps } from './types.ts';

export const postLogin = async (data: PostLoginProps) => {
  return await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
};
