import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PopularCourses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        const fetchPopularClasses = async () => {
            try {
                const response = await axiosSecure.get('/classes');
                setPopularClasses(response.data);
            } catch (error) {
                console.error('Error fetching popular classes:', error);
            }
        };

        fetchPopularClasses();
    }, []);

    // Sort the popularClasses array in descending order based on enrolled students
    popularClasses.sort((a, b) => b.enrolled - a.enrolled);

    return (
        <div>
            <h2 className="text-center text-4xl my-6 font-semibold">Popular Courses</h2>
            <Fade direction='left'>
                <div className='grid lg:grid-cols-3 gap-5'>
                    {popularClasses.map((classItem) => (
                        <div key={classItem._id}>
                            <div className="card w-96 h-96 glass lg:m-6">
                                <figure><img src={classItem.image} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{classItem.className}</h2>
                                    <p>Instructor: {classItem.instructorName}</p>
                                    <p>Student Enrolled: {classItem.enrolled}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default PopularCourses;
