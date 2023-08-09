import Home from "../src/pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "/products",
      element: (
        <Products/>
      ),
    },
    {
      path: "/users",
      element: (
        <Users/>
      ),
    },
  ]);

  return (<RouterProvider router= {router} />
  )
}

export default App
