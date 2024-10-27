import Books from "../Components/Books";
import Hero from "../Components/Hero";

const Home = () => {
    return (
        <div className="space-y-10 mb-10">
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default Home;