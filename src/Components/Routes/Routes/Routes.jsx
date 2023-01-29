import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
// import Private from "../Private/Private";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/registration",
          element:<Register></Register>
        },
        
      ],
    },
  ]);
  
  export default router;