import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const InstructorBanner = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-school-server-shuvakarmakar.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            });
    }, []);

    const limitedInstructors = instructors.slice(0, 6);

    return (
        <>
            <Fade>
                <div className="container mx-auto">
                    <h2 className="text-center text-4xl my-6 font-semibold">Popular Instructors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {limitedInstructors.map((instructor) => (
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
            </Fade>
        </>
    );
};

export default InstructorBanner;
