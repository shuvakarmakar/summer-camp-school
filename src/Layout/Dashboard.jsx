import { Slide } from "react-awesome-reveal";
import { FaHome, FaLaptopCode, FaMoneyBill, FaPlusSquare, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import Navbar from "../Shared/NavBar/NavBar";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useAuth();

    return (
        <>  
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:m-10 items-center justify-center">
                    <Outlet></Outlet>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <Slide direction="left" triggerOnce>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {isAdmin ? (
                                <>
                                    <li>
                                        <span className="font-semibold text-center text-xl">Admin :{user.displayName}</span>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageClasses">
                                            <FaLaptopCode className="mr-2" />
                                            Manage Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageUsers">
                                            <FaUser className="mr-2" />
                                            Manage Users
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                    <li>
                                        <NavLink to="/">
                                            <FaHome className="mr-2" />
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/classes">Classes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/instructors">Instructors</NavLink>
                                    </li>
                                </>
                            ) : isInstructor ? (
                                <>
                                    <li>
                                        <span className="font-semibold text-center text-xl">Instructor :{user.displayName}</span>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addaclass">
                                            <FaPlusSquare className="mr-2" />
                                            Add A Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myclasses">
                                            <FaLaptopCode className="mr-2" />
                                            My Classes
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                    <li>
                                        <NavLink to="/">
                                            <FaHome className="mr-2" />
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/classes">Classes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/instructors">Instructors</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <span className="font-semibold text-center">Student :{user.displayName}</span>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myclass">
                                            <FaHome className="mr-2" />
                                            My Selected Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myenrolledclass">
                                            <FaLaptopCode className="mr-2" />
                                            My Enrolled Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymenthistory">
                                            <FaMoneyBill className="mr-2" />
                                            My Payment History
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                    <li>
                                        <NavLink to="/">
                                            <FaHome className="mr-2" />
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/classes">Classes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/instructors">Instructors</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </Slide>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
