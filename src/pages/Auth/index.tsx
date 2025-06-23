import { FormattedMessage } from 'react-intl';
import { Header } from './ui/Header.tsx';
import { Typography } from '../../shared/ui/Typography';

export const AuthPage = () => {
  return (
    <>
      <Header />
      <div className="screen-padding flex flex-1 items-center justify-center gap-5">
        <Typography as="h2" type="h2">
          <FormattedMessage defaultMessage="Вход в кабинет" />
        </Typography>
      </div>
    </>
  );
};
