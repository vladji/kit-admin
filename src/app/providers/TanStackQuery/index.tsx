import type { ReactNode } from 'react';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const TanStackQuery = ({ children }: { children: ReactNode }) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    {children}
  </PersistQueryClientProvider>
);
