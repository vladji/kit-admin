import { FormattedMessage } from 'react-intl';
import { MainButton } from 'shared/ui/Buttons/MainButton.tsx';

export const NotFoundPage = () => (
  <section className="p-6">
    <div className="desktop-section flex-col-gap-6 items-center justify-center">
      <h1 className="h2 text-center">
        <FormattedMessage defaultMessage="Такой страницы не существует" />
      </h1>
      <MainButton className="w-full xl:w-auto" link="/">
        <FormattedMessage defaultMessage="На главеную" />
      </MainButton>
    </div>
  </section>
);
