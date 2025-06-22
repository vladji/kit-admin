import { ContextProvider } from 'app/providers/ContextProvider';
import { LocaleProvider } from 'app/providers/LocaleProvider';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <ContextProvider>
      <LocaleProvider>
        <h1>
          <FormattedMessage defaultMessage="Привет мир" />
        </h1>
      </LocaleProvider>
    </ContextProvider>
  );
}

export default App;
