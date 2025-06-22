import { RouterProvider, createRouter } from '@tanstack/react-router';
import { NotFoundPage } from 'pages/404';
import { routeTree } from '../../../routeTree.gen.ts';

export const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultNotFoundComponent: NotFoundPage,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default <RouterProvider router={router} />;
