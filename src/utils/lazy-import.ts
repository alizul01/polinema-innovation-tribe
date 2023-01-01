import * as React from "react";

/**
 * Named imports for React.lazy
 *
 * @links {@see https://github.com/facebook/react/issues/14603#issuecomment-726551598 GitHub comment}
 *
 * @usage
 * ```tsx
 * const { Home } = lazyImport(() => import("./Home"), "Home");
 * ```
 */
export function lazyImport<
  T extends React.ComponentType,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then((module) => ({ default: module[name] }))
    ),
  });
}
