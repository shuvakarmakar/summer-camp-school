import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";


const ClassesCard = ({ classItem }) => {
    const { _id, image, classname, availableSeats, price, instructor } = classItem;
    const { user } = useAuth();
    // const [, refetch] = useClasses();
    const navigate = useNavigate();

    const handleSelectClass = classItem => {
        console.log(classItem);
        if (user && user.email) {
            const selectClass = { classId: _id, image, classname, instructor, availableSeats, price, email: user.email }
            fetch("http://localhost:5000/selectclass", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch(); //refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added Class Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Select Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div className="card w-96 bg-white rounded-lg shadow-lg">
            <figure className="overflow-hidden rounded-t-lg">
                <img src={image} alt="Shoes" className="object-cover w-full h-48" />
            </figure>
            <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold mb-2">{classname}</h2>
                <p className="text-gray-600 mb-2 font-semibold">Instructor: {instructor}</p>
                <p className="text-gray-600 mb-2 font-semibold">Available Seats: {availableSeats}</p>
                <p className="text-gray-600 mb-2 font-semibold">Price: ${price}</p>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <button onClick={() => handleSelectClass(classItem)} className="btn btn-primary text-white">Select Class</button>
            </div>
        </div>
    );
};

export default ClassesCard;