import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Students } from "./pages/students";
import { Contacts } from "./pages/contacts";
import { StudentsDetails } from "./pages/students-details";
import { ErrorPage } from "./pages/error-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/students/:id",
    element: <StudentsDetails />,
  },
]);
