import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const ClassesCard = ({ classItem }) => {
    const { _id, image, className, instructorName, instructorEmail, availableSeat, price, status, enrolled } = classItem;
    const { user } = useAuth();
    const navigate = useNavigate();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleSelectClass = () => {
        if (user && user.email) {
            if (availableSeat === 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'No available seats',
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }

            if (isAdmin || isInstructor) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Only students can select a class',
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }

            const selectClass = {
                classId: _id,
                image,
                className,
                instructorName,
                instructorEmail,
                status,
                availableSeat,
                price,
                email: user.email,
                enrolled: 0
            };

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
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added Class Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Please Login to Select Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: window.location.pathname } });
                }
            });
        }
    };

    return (
        <div className={`card w-96 bg-white rounded-lg shadow-lg ${availableSeat === 0 ? 'bg-red-100' : ''}`}>
            <figure className="overflow-hidden rounded-t-lg">
                <img src={image} alt="Shoes" className="object-cover w-full h-48" />
            </figure>
            <div className="px-6 py-4">
                <h2 className="text-2xl font-semibold mb-2">{className}</h2>
                <p className="text-gray-600 mb-2 font-semibold">Instructor: {instructorName}</p>
                <p className="text-gray-600 mb-2 font-semibold">Available Seats: {availableSeat}</p>
                <p className="text-gray-600 mb-2 font-semibold">Price: ${price}</p>
                <p className="text-gray-600 mb-2 font-semibold">Enrolled Student: {enrolled}</p>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <button
                    onClick={handleSelectClass}
                    disabled={availableSeat === 0 || isAdmin || isInstructor}
                    className="btn btn-primary text-white"
                >
                    Select Class
                </button>
            </div>
        </div>
    );
};

export default ClassesCard;
