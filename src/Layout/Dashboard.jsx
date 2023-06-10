import { Slide } from "react-awesome-reveal";
import { FaHome, FaLaptopCode, FaPlusSquare, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor"

const Dashboard = () => {

    // TODO: load data from the server to have dynamic isAdmin based od Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isInstructor);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <Slide direction="left" triggerOnce>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageClasses"><FaLaptopCode></FaLaptopCode> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageUsers"><FaUser></FaUser> Manage Users</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                            <li><NavLink to="/classes">Classes</NavLink></li>
                            <li><NavLink to="/instructors">Instructors</NavLink></li>
                            <li></li>
                        </> :

                            isInstructor ? <>
                                <li><NavLink to="/dashboard/addaclass"><FaPlusSquare></FaPlusSquare>Add A Class</NavLink></li>
                                <li><NavLink to="/dashboard/myclasses"><FaLaptopCode></FaLaptopCode>My Classes</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to="/classes">Classes</NavLink></li>
                                <li><NavLink to="/instructors">Instructors</NavLink></li>
                                <li></li>

                            </> : <>
                                <li><NavLink to="/dashboard/myclass"><FaHome></FaHome>My Selcted Class</NavLink></li>
                                <li><NavLink to="/dashboard/myenrolledclass"><FaLaptopCode></FaLaptopCode> My Enrolled Class</NavLink></li>

                                <div className="divider"></div>
                                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to="/classes">Classes</NavLink></li>
                                <li><NavLink to="/instructors">Instructors</NavLink></li>
                                <li></li>
                            </>

                    }
                </ul>
                </Slide>
            </div>
        </div>
    );
};

export default Dashboard;