import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootLayout from "./Pages/RootLayout"
import ErrorPage from "./Pages/ErrorPage"
import Login from "./Pages/Login"
import Logout from "./Pages/Logout";
import Register from "./Pages/Register";

import Result from "./Pages/Result";
import Candidate from "./Pages/Candidates";
import Elections from "./Pages/Elections";
import Congrats from "./Pages/Congrats";
import ElectionDetails from "./Pages/ElectionDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "results",
        element: <Result />,
      },
      {
        path: "elections",
        element: <Elections />,
      },
      {
        path: "congrats",
        element: <Congrats />,
      },
      {
        path: "election/:id/candidates",
        element: <ElectionDetails />,
      },
      {
        path: "elections/:id/candidates",
        element: <Candidate />,
      },
   
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

const App = () => {

  return (
   <RouterProvider router={router}/>
  )
}

export default App