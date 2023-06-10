import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";

const MyClasses = () => {
    const { user } = useAuth();

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/instructor-classes?instructorEmail=${user?.email}`)

                .then(res => res.json())
                .then(data => {
                    setClasses(data);
                })
                .catch(error => {
                    console.error("Error fetching classes:", error);
                });
        }
    }, [user]);

    const handleUpdate = () =>{
        // 
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Camp || Instructor Classes</title>
            </Helmet>
            <h2 className="text-center font-semibold text-2xl">My Classes: {classes.length}</h2>
            <div className="overflow-x-auto m-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrolled</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {classes.map((classItem, index) => (
                            <tr key={classItem._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{classItem.className}</td>
                                <td className="text-end">${classItem.price}</td>
                                <td>{classItem.status}</td>
                                <td>{classItem.enrolled}</td>
                                <td></td>
                                <td>
                                    <button onClick={() => handleUpdate(classItem)} className="btn btn-ghost bg-emerald-400 text-white"><FaEdit></FaEdit></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;
