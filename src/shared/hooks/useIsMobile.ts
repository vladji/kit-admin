export const useIsMobile = (): boolean => {
  const userAgent = navigator?.userAgent;
  return !!userAgent.toLowerCase().match(/iphone|android|mobile/);
};
