import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import InstructorBanner from "../Banner/InstructorBanner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Summer Camp School || Home</title>
            </Helmet>
            {/* TODO */}
            <Banner></Banner>
            <InstructorBanner></InstructorBanner>
        </div>
    );
};

export default Home;