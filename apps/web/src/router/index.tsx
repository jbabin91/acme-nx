import { Link, Outlet, RootRoute, Route, Router } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = new Route({
  component: function Index() {
    return (
      <div>
        <h3>Welcome Home!</h3>
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
