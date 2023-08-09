import { lazyRouteComponent, Route } from '@tanstack/react-router';

import { rootRoute } from '../../../router';

export const homeRoute = new Route({
  component: lazyRouteComponent(() => import('../components'), 'Home'),
  getParentRoute: () => rootRoute,
  path: '/',
});
