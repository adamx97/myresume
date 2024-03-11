import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import AboutThisAppPage from "../pages/AboutThisApp";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import HomePage from '../pages/Home';
import PreferencesPage from '../pages/Preferences';
import ErrorPage from '../pages/Error';

export default function Navigation() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: 'root',
      children: [
        { 
          index: true, element: <HomePage /> },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "about this app",
          element: <AboutThisAppPage />,
        },
        {
          path: "preferences",
          element: <PreferencesPage />,
        },
        {
          path: "home", 
          element: <HomePage />,
        }
      ],
    },
  ]);

  return router;
}
