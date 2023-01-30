import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import UpdateBill from "../../UpdateBill/UpdateBill";


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
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/update-billing/:id",
          loader: ({ params }) =>
          fetch(
            `http://localhost:5000/update-billing/${params.id}`
          ),
          element:<UpdateBill></UpdateBill>
        },
        
      ],
    },
  ]);
  
  export default router;