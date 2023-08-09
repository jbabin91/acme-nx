import { Link, Outlet } from '@tanstack/react-router';

import { TanstackRouterDevtools } from '../../components/dev-tools';
import { ModeToggle } from '../../components/mode-toggle';
import { Button } from '../../components/ui';

export function Layout() {
  return (
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
      <TanstackRouterDevtools />
    </div>
  );
}
