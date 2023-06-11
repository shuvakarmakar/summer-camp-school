import { useEffect, useState } from "react";

const InstructorBanner = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            });
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-center text-4xl my-6 font-semibold">Popular Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {instructors.map(instructor => (
                        <div className="card w-96 bg-base-100 shadow-xl" key={instructor._id}>
                            <figure className="px-10 pt-10">
                                <img src={instructor.image} alt="Instructor" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>Email: {instructor.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default InstructorBanner;
