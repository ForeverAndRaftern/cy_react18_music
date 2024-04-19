import { lazy } from "react";
import {
  RouteObject,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));

const Mine = lazy(() => import("@/views/mine"));
const Focus = lazy(() => import("@/views/focus"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
];

const router = createBrowserRouter(routes);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
