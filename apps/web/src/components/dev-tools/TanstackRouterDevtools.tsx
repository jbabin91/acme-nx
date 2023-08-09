import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const TanstackRouterDevtools = import.meta.env.PROD
  ? (): null => null
  : () => <TanStackRouterDevtools position="bottom-right" />;
