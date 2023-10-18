import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import ThemeSelector from "./layouts/ThemeSelector";

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
      <body className="d-flex flex-column h-100">
        <ThemeSelector />
        <Navbar />
        <main className="flex-shrink-0">
          <div className="container"></div>
          <RouterProvider router={router} />
        </main>
        <RouterProvider router={router} />
        <Footer />
      </body>
    </>
  );
}
