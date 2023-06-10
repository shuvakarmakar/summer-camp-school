import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const AddAClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        // Handle form submission and post data to the database
        console.log(data);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Add A Class Page</h2>
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
                        <label htmlFor="classImage" className="block mb-1">Class Image:</label>
                        <input
                            type="file"
                            {...register('classImage', { required: true })}
                            name="classImage"
                            className={`file-input file-input-bordered ${errors.classImage ? 'input-error' : ''}`}
                        />
                        {errors.classImage && <span className="error-message">Class Image is required</span>}
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
                        <label htmlFor="status" className="block mb-1">Status:</label>
                        <input
                            type="text"
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
