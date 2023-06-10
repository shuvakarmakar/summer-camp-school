import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(data, imgURL);
                    const { className, instructorName, instructorEmail, status, availableSeat, price } = data;
                    const classItem = { className, instructorName, instructorEmail, status, availableSeat, price: parseFloat(price), image: imgURL, enrolled: 0 }
                    console.log(classItem);
                    axiosSecure.post('/classes', classItem)
                        .then(data => {
                            console.log('After posting New Class', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class Addeded Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };
    console.log(img_hosting_token);

    return (
        <div>
            <h2 className="text-2xl text-center mb-10 divider font-bold">Add A Class Page</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="className" className="block mb-1">Class Name:</label>
                        <input
                            type="text"
                            {...register('className', { required: true })}
                            name="className"
                            placeholder="Class Name"
                            className={`input input-bordered ${errors.className ? 'input-error' : ''}`}
                        />
                        {errors.className && <span className="error-message">Class Name is required</span>}
                    </div>
                    <div>
                        <label htmlFor="image" className="block mb-1">Class Image:</label>
                        <input
                            type="file"
                            {...register('image', { required: true })}
                            name="image"
                            className="file-input file-input-bordered w-full " />
                        {errors.image && <span className="error-message">Class Image is required</span>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label htmlFor="instructorName" className="block mb-1">Instructor Name:</label>
                        <input
                            type="text"
                            {...register('instructorName')}
                            name="instructorName"
                            value={user.displayName}
                            readOnly
                            className="input input-bordered"
                        />
                    </div>
                    <div>
                        <label htmlFor="instructorEmail" className="block mb-1">Instructor Email:</label>
                        <input
                            type="email"
                            {...register('instructorEmail')}
                            name="instructorEmail"
                            value={user.email}
                            readOnly
                            className="input input-bordered"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label htmlFor="availableSeat" className="block mb-1">Available Seat:</label>
                        <input
                            type="number"
                            {...register('availableSeat', { required: true })}
                            name="availableSeat"
                            placeholder="Available Seat"
                            className={`input input-bordered ${errors.availableSeat ? 'input-error' : ''}`}
                        />
                        {errors.availableSeat && <span className="error-message">Available Seat is required</span>}
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-1">Price:</label>
                        <input
                            type="text"
                            {...register('price', { required: true })}
                            name="price"
                            className="input input-bordered"
                        />
                        {errors.price && <span className="error-message">Price is required</span>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label htmlFor="status" className="block mb-1">Status:</label>
                        <input
                            type="text"
                            {...register('status')}
                            value="pending"
                            readOnly
                            className="input input-bordered"
                        />
                    </div>
                </div>
                <button className="btn btn-info mt-6" type="submit">ADD CLASS</button>
            </form>
        </div>
    );
};

export default AddAClass;
