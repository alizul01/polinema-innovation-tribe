import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "~/components/Layout";
import { PendingFallback } from "~/components/PendingFallback";
import { lazyImport } from "~/utils/lazy-import";

const { CompetitionPage } = lazyImport(
  () => import("./CompetitionPage"),
  "CompetitionPage"
);
const { HomePage } = lazyImport(() => import("./HomePage"), "HomePage");
const { IdeaPage } = lazyImport(() => import("./IdeaPage"), "IdeaPage");

export function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "idea", element: <IdeaPage /> },
        { path: "competition", element: <CompetitionPage /> },
        { path: "*", element: <Navigate replace to="/" /> },
      ],
    },
  ]);

  return (
    <RouterProvider fallbackElement={<PendingFallback />} router={router} />
  );
}
