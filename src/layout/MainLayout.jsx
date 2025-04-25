import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import FooterPage from "../pages/Shared/FooterPage";

const MainLayout = () => {
    return (
        <div className="bg-slate-100 dark:bg-gray-800">
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
        </div>
    );
};

export default MainLayout;