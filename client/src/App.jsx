import "./App.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex-shrink-0">
        <div className="container"></div>
        <RouterProvider router={router} />
      </main>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
