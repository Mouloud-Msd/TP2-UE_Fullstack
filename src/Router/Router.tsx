import Home from "../features/home/Home";
import App from "../App";
import NotFound from "../global_components/NotFound";
import Artists from "../features/artists/pages/Artists";
import Events from "../features/events/pages/Events";
import About from "../features/about/About";
import { createBrowserRouter } from "react-router-dom";
import ArtistDetail from "../features/artists/pages/ArtistDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "artist/:id",
        element: <ArtistDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
export default router;
