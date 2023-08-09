import { RootRoute, Router } from '@tanstack/react-router';

import { aboutRoute } from '../modules/About';
import { homeRoute } from '../modules/Home';
import { Layout } from '../shared';

export const rootRoute = new RootRoute({
  component: Layout,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
