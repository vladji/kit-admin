import api from 'app/api';

export const getSellersList = () =>
  api({
    url: '/sellers-list',
  });
