import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/home.view";
import RootLayout from "./components/layouts/root.layout";
import AuthLayout from "./components/layouts/auth.layout";
import Login from "./views/auth/login.view";
import Register from "./views/auth/register.view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path: "/auth/register",
        element: <Register />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
