import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/MainLayout";
import Login from "../src/auth/Login";
import Register from "../src/auth/Register";
import Home from "../src/components/home/Home";
import Error from "../src/MainComps/Error";
import PrivateRoutes from "./PrivateRoutes";
import Add from "../src/components/add-books/Add";
import AllBooks from "../src/components/all-books/AllBooks";
import Borrowed from "../src/components/borrowed-books/Borrowed";

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
            },
            {
                path: "/addBooks",
                element: <PrivateRoutes>
                    <Add></Add>
                </PrivateRoutes>
            },
            {
                path: "/borrowedBooks",
                element: <PrivateRoutes>
                    <Borrowed></Borrowed>
                </PrivateRoutes>
            },
            {
                path: "/allBooks",
                element: <PrivateRoutes>
                    <AllBooks></AllBooks>
                </PrivateRoutes>
            },
        ]
    },
    {
        path: "/",
        element: <Home></Home>
    }
])

export default router