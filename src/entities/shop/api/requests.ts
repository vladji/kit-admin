import api from 'app/api';

export const getShopList = () =>
  api({
    url: '/shops-list',
  });
