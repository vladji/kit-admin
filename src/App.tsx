import { ContextProvider } from 'app/providers/ContextProvider';
import { LocaleProvider } from 'app/providers/LocaleProvider';
import RouterProvider from 'app/providers/RouterProvider';
import { TanStackQuery } from './app/providers/TanStackQuery';
import { Toaster } from './shared/ui/Toaster';

function App() {
  return (
    <ContextProvider>
      <LocaleProvider>
        <Toaster position="top-right" richColors />
        <TanStackQuery>{RouterProvider}</TanStackQuery>
      </LocaleProvider>
    </ContextProvider>
  );
}

export default App;
