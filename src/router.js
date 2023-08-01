import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/Index";
import Stopwatch from "./pages/stopwatch/Stopwatch";
import Diffrence from "./pages/stopwatch/Diffrence";
import HandlingEvents from "./pages/HandlingEvents";
import PassValue from "./pages/PassValuesthorughprops";
import ConditionalRendering from "./pages/ConditionalRendering";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/stopwatch",
        element: <Stopwatch />,
      },
      {
        path: "/setTimeout-vs-setInterval",
        element: <Diffrence />,
      },
      {
        path: "/handling-events",
        element: <HandlingEvents />,
      },
      {
        path: "/components-and-props",
        element: <PassValue />,
      },
      {
        path: "/conditional-rendering",
        element: <ConditionalRendering />,
      },
    ],
  },
]);

export default appRouter;
