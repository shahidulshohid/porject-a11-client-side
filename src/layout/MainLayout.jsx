import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import FooterPage from "../pages/Shared/FooterPage";

const MainLayout = () => {
    return (
        <div className="bg-blue-400 dark:bg-blue-500">
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
        </div>
    );
};

export default MainLayout;