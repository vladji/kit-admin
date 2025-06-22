import { FormattedMessage } from 'react-intl';
import { MainButton } from 'shared/ui/Buttons/MainButton.tsx';
import { Text } from 'shared/ui/Typography';

export const NotFoundPage = () => (
  <section className="flex-center h-screen p-6">
    <div className="flex-col-gap-12 items-center justify-center">
      <Text as="h1" type="h2">
        <FormattedMessage defaultMessage="Такой страницы не существует" />
      </Text>
      <MainButton link="/">
        <FormattedMessage defaultMessage="На главную" />
      </MainButton>
    </div>
  </section>
);
