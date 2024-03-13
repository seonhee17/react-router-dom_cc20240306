import { createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import Author from "./Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/author/:name",
        element: <Author />,
      },
      {
        path: "/author/:name/:book",
        element: <Author />,
      },
      {
        path: "/author/:name/:book/chapters",
        element: <Author />,
      },
      {
        path: "/author/:name/:book/characters",
        element: <Author />,
      },
    ],
    errorElement : <NotFound />
  },
]);

export default router;