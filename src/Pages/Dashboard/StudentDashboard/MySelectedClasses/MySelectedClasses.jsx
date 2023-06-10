import { Helmet } from "react-helmet-async";
import { FaMoneyBill, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useClasses from "../../../../hooks/useClasses";

const MySelectedClasses = () => {
    const [classes, refetch] = useClasses();
    console.log(classes);

    const handleDelete = classItem => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectclass/${classItem._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Selected Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Camp || Student Selected Classes</title>
            </Helmet>
            <h2 className="text-center font-semibold text-2xl">My Selected Classes : {classes.length}</h2>
            <div className="overflow-x-auto m-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            classes.map((classItem, index) => <tr
                                key={classItem._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classItem.className}
                                </td>
                                <td className="text-end">${classItem.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(classItem)} className="btn btn-ghost bg-red-700 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <Link to='/dashboard/payment'><button className="btn btn-ghost bg-blue-700 text-white"><FaMoneyBill></FaMoneyBill></button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;