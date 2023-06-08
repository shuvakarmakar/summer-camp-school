import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Summer Camp | Classes</title>
            </Helmet>
            <div>
                <h2 className="text-center text-4xl my-6 font-semibold">All Classes</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid gap-4 lg:grid-cols-3">
                        {classes.map(classItem => (
                            <div className="card w-96 bg-white rounded-lg shadow-lg" key={classItem._id}>
                                <figure className="overflow-hidden rounded-t-lg">
                                    <img src={classItem.image} alt="Shoes" className="object-cover w-full h-48" />
                                </figure>
                                <div className="px-6 py-4">
                                    <h2 className="text-xl font-semibold mb-2">{classItem.classname}</h2>
                                    <p className="text-gray-600 mb-2">Instructor: {classItem.instructor}</p>
                                    <p className="text-gray-600 mb-2">Available Seats: {classItem.availableSeats}</p>
                                    <p className="text-gray-600 mb-2">Price: {classItem.price}</p>
                                </div>
                                <div className="px-6 py-4 flex justify-end">
                                    <button className="btn btn-primary">Select Class</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Classes;
