import { jwtDecode } from 'jwt-decode';
import { LocalStorageKeys } from 'app/storage/types.ts';

interface TokenPayload {
  uniqId: string;
  role: string;
  exp: number;
  iat: number;
}

export const getTokenPayload = () => {
  const token = localStorage.getItem(LocalStorageKeys.Token);
  if (token) {
    return jwtDecode<TokenPayload>(token);
  }
  return null;
};
