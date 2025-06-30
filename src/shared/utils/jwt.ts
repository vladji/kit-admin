import { jwtDecode } from 'jwt-decode';
import type { UserRole } from 'app/config/types.ts';
import { LocalStorageKeys } from 'app/storage/types.ts';

interface TokenPayload {
  uniqId: string;
  roles: Partial<Record<UserRole, boolean>>;
  exp: number;
  iat: number;
}

export const getTokenPayload = () => {
  try {
    const token = localStorage.getItem(LocalStorageKeys.Token);
    if (token) {
      return jwtDecode<TokenPayload>(token);
    }
    return null;
  } catch {
    throw new Error('Error: jwt token decode');
  }
};
