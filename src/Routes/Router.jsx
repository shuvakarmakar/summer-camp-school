import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses/MySelectedClasses";
import Error from "../Pages/Error/Error";
import Classes from "../Pages/Home/Classes/Classes";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Home/Instructor/Instructor";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/instructors',
            element: <Instructor></Instructor>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        }
      ]
    },
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'myclass',
                element: <MySelectedClasses></MySelectedClasses>
            }
        ]
    }
  ]);