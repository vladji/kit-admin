import { FormattedMessage } from 'react-intl';
import { MainButton } from 'shared/ui/Buttons/MainButton.tsx';

export const NotFoundPage = () => (
  <section className="p-6">
    <div className="flex-col-gap-6 items-center justify-center">
      <h1 className="text-center">
        <FormattedMessage defaultMessage="Такой страницы не существует" />
      </h1>
      <MainButton link="/">
        <FormattedMessage defaultMessage="На главную" />
      </MainButton>
    </div>
  </section>
);
