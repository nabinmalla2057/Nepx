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
      <div className="d-flex flex-column h-100vh">
        {/* <ThemeSelector /> */}
        <Navbar />
        <main className="flex-shrink-0">
          {/* <div className="container">
            <RouterProvider router={router} />
          </div> */}
          <div className="container">
            <h1 className="mt-5">Sticky footer with fixed navbar</h1>
            <p className="lead">
              Pin a footer to the bottom of the viewport in desktop browsers
              with this custom HTML and CSS. A fixed navbar has been added with{" "}
              <code className="small">padding-top: 60px;</code> on the{" "}
              <code className="small">main &gt; .container</code>.
            </p>
            <p>
              Back to{" "}
              <a href="/docs/5.3/examples/sticky-footer/">
                the default sticky footer
              </a>{" "}
              minus the navbar.
              <RouterProvider router={router} />
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
