import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    // TODO: load data from the server to have dynamic isAdmin based od Data
    const isAdmin = true;

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
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                
                            <li><NavLink to="/dashboard/myclass"><FaHome></FaHome>My Selcted Class</NavLink></li>
                            <li><NavLink to="/dashboard/myenrolledclass"><FaHome></FaHome>My Enrolled Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaHome></FaHome>Manage Users</NavLink></li>
                            

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/classes">Classes</NavLink></li>
                    <li><NavLink to="/instructors">Instructors</NavLink></li>
                    <li></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;