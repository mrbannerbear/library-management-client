import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/MainLayout";
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
    }
])

export default router