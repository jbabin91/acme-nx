import { Link, Outlet, RootRoute, Route, Router } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { ModeToggle } from '../components/mode-toggle';
import { Button } from '../components/ui/button';

const rootRoute = new RootRoute({
  component: () => (
    <div className="m-2 min-h-full">
      <div className="flex justify-between p-1">
        <div className="flex gap-2">
          <Link to="/">
            <Button variant="link">Home</Button>
          </Link>
          <Link to="/about">
            <Button variant="link">About</Button>
          </Link>
        </div>
        <ModeToggle />
      </div>
      <hr />
      <div className="mx-10 mt-5">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});

const indexRoute = new Route({
  component: function Index() {
    return (
      <div className="flex flex-col gap-3">
        <h3>Welcome Home!</h3>
        <div>
          <Button onClick={() => alert('Hello world')}>Click me</Button>
        </div>
      </div>
    );
  },
  getParentRoute: () => rootRoute,
  path: '/',
});

const aboutRoute = new Route({
  component: function About() {
    return <div>Hello from About!</div>;
  },
  getParentRoute: () => rootRoute,
  path: '/about',
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
