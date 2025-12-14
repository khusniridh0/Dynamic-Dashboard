import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
