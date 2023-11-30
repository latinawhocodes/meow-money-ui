import { createBrowserRouter  } from "react-router-dom";
import Homepage from "../components/Homepage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    //   errorElement: <Error />,
      children: [
        {
            index: true,
            element: <Homepage />,
            // errorElement: <Error />
        },
        {
            // path: "logout",
            // action: logoutAction
        },
      ]
    },
    // {
    //     element: <ProtectedRoutes />,
    //     children: [
    //         {
    //             path: "/dashboard",
    //             element: <Dashboard />
    //         }
    //     ]
    // }
  ]);
  
export default router;