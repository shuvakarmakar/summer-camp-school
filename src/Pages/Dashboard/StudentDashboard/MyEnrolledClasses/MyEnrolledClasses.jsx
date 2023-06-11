import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MyEnrolledClasses = () => {
    const { user } = useAuth();
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        // Fetch enrolled classes from the API
        axiosSecure
            .get(`/enrolled-classes/${user.email}`)
            .then(response => {
                setEnrolledClasses(response.data);
            })
            .catch(error => {
                console.error('Error fetching enrolled classes:', error);
            });
    }, [axiosSecure, user.email]);

    return (
        <div className="lg:w-full">
            <Helmet>
                <title>Summer Camp || Student Enrolled Classes</title>
            </Helmet>
            <h2 className="text-center font-semibold text-2xl">My Enrolled Classes: {enrolledClasses.length}</h2>
            <div className="overflow-x-auto lg:m-10">
                <table className="table w-full">
                    {/* Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledClasses.map((classItem, index) => (
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
                                <td>${classItem.price}</td>
                                <td>{classItem.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;
