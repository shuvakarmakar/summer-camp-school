import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddAClass from "../Pages/Dashboard/InstructorDashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import MyEnrolledClasses from "../Pages/Dashboard/StudentDashboard/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import Error from "../Pages/Error/Error";
import Classes from "../Pages/Home/Classes/Classes";
import Home from "../Pages/Home/Home/Home";
import Instructor from "../Pages/Home/Instructor/Instructor";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
            // Student Route
            {
                path: 'myclass',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'myenrolledclass',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            // Admin Route
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            // Instructor Route
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // Payment
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    }
  ]);