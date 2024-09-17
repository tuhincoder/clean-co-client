import { createBrowserRouter } from "react-router-dom";
// import MainLayOut from "../../LayOuts/MainLayOut/MainLayOut";
import App from "../../App";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

import AdminLayOut from "../../LayOuts/AdminLayOut";
import Service from "../../Pages/Dasboard/Service";
import AllServices from "../../Pages/Home/AllServices";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'services',
                element: <AllServices></AllServices>
            },
        ]

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    // dashboard
    {
        path: '/admin',
        element: <AdminLayOut></AdminLayOut>,
        children: [
            {
                index: true,
                element: <Service></Service>
            }
        ]

    }
])

export default router;