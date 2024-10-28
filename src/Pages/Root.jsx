import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-139px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;