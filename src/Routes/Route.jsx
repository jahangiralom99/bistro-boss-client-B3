import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Home/Menu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../MainLayout/DashBoard";
import Cart from "../Pages/Deshboard/Cart/Cart";
import AllUsers from "../Pages/Deshboard/AllUsers/AllUsers";
import AddItems from "../Pages/Deshboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Deshboard/ManageItem/ManageItem";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: 'order/:category',
                element: <PrivetRoute><Order></Order></PrivetRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashBoard',
        element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: 'allUser',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            }
        ]
    }
])

export default Route;