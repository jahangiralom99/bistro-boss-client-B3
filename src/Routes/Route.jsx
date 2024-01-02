import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Home/Menu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";


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
                path: 'order',
                element: <Order></Order>
            }
        ]
    }
])

export default Route;