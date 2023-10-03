import {BrowserRouter, RouterProvider, createBrowserRouter} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
  path:"/",
  element:<Home />,
  },
  {
    path:"/cart",
    element:<Cart/>,
  },
]);

export default function App(){
  return(
    <>
     <RouterProvider router={router}/>
    
    </>
  )


}
