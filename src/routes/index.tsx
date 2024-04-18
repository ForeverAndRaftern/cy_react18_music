import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover/index"));
const Download = lazy(() => import("@/views/download/index"));
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
];

export default routes;
