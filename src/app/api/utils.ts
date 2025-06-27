import type { AxiosHeaders, RawAxiosRequestHeaders } from 'axios';

export const transformAxiosHeaders = (
  axiosHeaders?: RawAxiosRequestHeaders | AxiosHeaders
) => {
  const rawHeaders = axiosHeaders ?? {};
  const cleanHeaders: Record<string, string> = {};

  Object.entries(rawHeaders).forEach(([key, value]) => {
    if (typeof value === 'string') {
      cleanHeaders[key] = value;
    }
  });

  return cleanHeaders;
};
