import { ContextProvider } from 'app/providers/ContextProvider';
import { LocaleProvider } from 'app/providers/LocaleProvider';
import RouterProvider from 'app/providers/RouterProvider';
import { TanStackQuery } from './app/providers/TanStackQuery';

function App() {
  return (
    <ContextProvider>
      <LocaleProvider>
        <TanStackQuery>{RouterProvider}</TanStackQuery>
      </LocaleProvider>
    </ContextProvider>
  );
}

export default App;
