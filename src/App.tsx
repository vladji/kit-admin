import { ContextProvider } from 'app/providers/ContextProvider';
import { LocaleProvider } from 'app/providers/LocaleProvider';
import RouterProvider from 'app/providers/RouterProvider';

function App() {
  return (
    <ContextProvider>
      <LocaleProvider>{RouterProvider}</LocaleProvider>
    </ContextProvider>
  );
}

export default App;
