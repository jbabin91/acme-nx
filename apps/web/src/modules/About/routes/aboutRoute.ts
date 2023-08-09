import { lazyRouteComponent, Route } from '@tanstack/react-router';

import { rootRoute } from '../../../router';

export const aboutRoute = new Route({
  component: lazyRouteComponent(() => import('../components'), 'About'),
  getParentRoute: () => rootRoute,
  path: '/about',
});
