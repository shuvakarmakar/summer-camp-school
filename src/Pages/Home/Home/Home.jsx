import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ExtraSection from "../Banner/ExtraSection";
import InstructorBanner from "../Banner/InstructorBanner";
import PopularCourses from "../Banner/PopularCourses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Summer Camp School || Home</title>
            </Helmet>
            {/* TODO */}
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <InstructorBanner></InstructorBanner>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;