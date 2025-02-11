import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import FooterPage from "../pages/Shared/FooterPage";
import BannerSection from "../components/BannerSection/BannerSection";

const MainLayout = () => {
    return (
        <div className="bg-blue-500 dark:bg-blue-600">
        <div>
            <Navbar></Navbar>
            <BannerSection></BannerSection>
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            <FooterPage></FooterPage>
        </div>
        </div>
    );
};

export default MainLayout;