import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('https://summer-camp-school-server-shuvakarmakar.vercel.app/instructors')
      .then(res => res.json())
      .then(data => {
        setInstructors(data);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Summer Camp | Instructors</title>
      </Helmet>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl my-6 font-semibold">All Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instructors.map(instructor => (
            <div className="bg-white shadow-xl rounded-xl p-6" key={instructor._id}>
              <figure className="mb-6">
                <img src={instructor.image} alt="Instructor" className="rounded-full w-32 h-32 mx-auto" />
              </figure>
              <div className="text-center">
                <h2 className="text-xl font-semibold">{instructor.name}</h2>
                <p className="text-gray-500">Email: {instructor.email}</p>
                <div className="mt-6">
                  <button className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-xl">
                    Explore Further
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructor;
