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
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            }
        ]
    }
])

export default Route;