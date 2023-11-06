import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/MainLayout";
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
import Home from "../src/components/home/Home";
import Error from "../src/MainComps/Error";

const router = createBrowserRouter([
    {
        // path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/",
        element: <Home></Home>
    }
])

export default router