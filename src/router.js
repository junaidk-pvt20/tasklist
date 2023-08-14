import { createHashRouter, createBrowserRouter, Routes } from "react-router-dom";
import { lazy } from "react";
import { PATH } from "./utils/utils";
const HomePage = lazy(() => import("./pages/HomePage/Home"));
const Stopwatch = lazy(() => import("./pages/stopwatch/Stopwatch"));
const Diffrence = lazy(() => import("./pages/stopwatch/Diffrence"));
const HandlingEvents = lazy(() => import("./pages/HandlingEvents"));
const PassValue = lazy(() => import("./pages/PassValuesthorughprops"));
const ConditionalRendering = lazy(() => import("./pages/ConditionalRendering"));
const Redux = lazy(() => import("./pages/Redux"));
const ApiIntegration = lazy(() => import("./pages/ApiIntegration/ApiIntegration"));
const appRouter = createBrowserRouter([
  {

    path: PATH.DEFAULT,
    element: <HomePage />,
    children: [
      {
        path: PATH.STOPWATCH,
        element: <Stopwatch />,
      },
      {
        path: PATH.SETTIMEOUT_INTERVAL,
        element: <Diffrence />,
      },
      {
        path: PATH.HANDLING_EVENTS,
        element: <HandlingEvents />,
      },
      {
        path: PATH.COMPONENTS_PROPS,
        element: <PassValue />,
      },
      {
        path: PATH.CONDITIONAL_RENDERING,
        element: <ConditionalRendering />,
      }, {
        path: PATH.REDUX,
        element: <Redux />
      }, {
        path: PATH.API_INTEGRATION,
        element: <ApiIntegration />
      }

    ],
  },
], {
  basename: "/tasklist",
});


export default appRouter;
