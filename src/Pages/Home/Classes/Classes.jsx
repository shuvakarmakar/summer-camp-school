import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassesCard from "./ClassesCard";

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
                        {classes.map(classItem => <ClassesCard
                            key={classItem._id}
                            classItem={classItem}
                        ></ClassesCard>)}
                    </div>
                )}
            </div>
        </>
    );
};

export default Classes;
