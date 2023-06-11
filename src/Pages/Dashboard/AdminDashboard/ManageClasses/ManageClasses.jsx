import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";

const ManageClasses = () => {
    const { user } = useAuth();

    const [classes, setClasses] = useState([]); // Initialize with an empty array

    useEffect(() => {
        if (user) {
            fetch("https://summer-camp-school-server-shuvakarmakar.vercel.app/classes")
                .then((res) => res.json())
                .then((data) => {
                    setClasses(data);
                })
                .catch((error) => {
                    console.error("Error fetching classes:", error);
                });
        }
    }, [user]);

    const handleApprove = (classId) => {
        // Send a request to the server to update the class status to "approved"
        fetch(`https://summer-camp-school-server-shuvakarmakar.vercel.app/classes/${classId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "approved" }),
        })
            .then((res) => res.json())
            .then((data) => {
                // Update the classes state with the updated class
                setClasses((prevClasses) =>
                    prevClasses.map((classItem) =>
                        classItem._id === classId ? { ...classItem, status: "approved" } : classItem
                    )
                );
            })
            .catch((error) => {
                console.error("Error updating class:", error);
            });
    };

    const handleDeny = (classId) => {
        // Send a request to the server to update the class status to "denied"
        fetch(`https://summer-camp-school-server-shuvakarmakar.vercel.app/classes/${classId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "denied" }),
        })
            .then((res) => res.json())
            .then((data) => {
                // Update the classes state with the updated class
                setClasses((prevClasses) =>
                    prevClasses.map((classItem) =>
                        classItem._id === classId ? { ...classItem, status: "denied" } : classItem
                    )
                );
            })
            .catch((error) => {
                console.error("Error updating class:", error);
            });
    };

    const handleSendFeedback = (classId) => {
        // Redirect or show a modal to send feedback for the selected class
        // You can implement this based on your requirements
        console.log("Sending feedback for class with ID:", classId);
    };

    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Camp || Manage Classes</title>
            </Helmet>
            <h2 className="text-center font-semibold text-2xl">Manage Classes</h2>
            <div className="overflow-x-auto m-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
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
                                            <img src={classItem.image} alt="Class Avatar" />
                                        </div>
                                    </div>
                                </td>
                                <td>{classItem.className}</td>
                                <td>{classItem.instructorName}</td>
                                <td>{classItem.instructorEmail}</td>
                                <td>{classItem.availableSeats}</td>
                                <td>${classItem.price}</td>
                                <td>{classItem.status}</td>
                                <td>
                                    {classItem.status === "pending" && (
                                        <button
                                            onClick={() => handleApprove(classItem._id)}
                                            className="btn btn-ghost bg-emerald-400 text-white"
                                        >
                                            <FaCheck />
                                        </button>
                                    )}
                                    {classItem.status === "pending" && (
                                        <button
                                            onClick={() => handleDeny(classItem._id)}
                                            className="btn btn-ghost bg-rose-400 text-white"
                                        >
                                            <FaTimes />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleSendFeedback(classItem._id)}
                                        className="btn btn-ghost bg-yellow-400 text-white"
                                    >
                                        <FaEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
