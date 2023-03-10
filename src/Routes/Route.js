import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import LogIn from "../Components/LogInForm/LogIn";
import Order from "../Components/Order/Order";
import Shop from "../Components/Shop/Shop";
import SignUp from "../Components/SignUpForm/SignUp";
import Main from "../Layout/Main";
import productsLoader from "../Loaders.js/productsLoader";



export const router = createBrowserRouter([
    {
        path:"/",
        element :<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/shop',
                loader:productsLoader,
                element:<Shop></Shop>
            },
            {
                path:'order',
                loader:productsLoader,
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:'*',
                element:<Error></Error>
            }
        ]
    }
])

console.log();