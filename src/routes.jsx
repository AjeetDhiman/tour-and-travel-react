import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import TripsPage from "./pages/TripsPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/trips", element: <TripsPage /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
