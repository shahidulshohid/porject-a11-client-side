import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllVoNeePostPage from "../pages/AllVoNeePostPage/AllVoNeePostPage";
import AddVoNeePostPage from "../pages/AddVoNeePostPage/AddVoNeePostPage";
import VolunteerNeedDetailsPage from "../pages/VolunteerNeedDetialsPage/VolunteerNeedDetailsPage";
import BeAVolunteerPage from "../pages/BeAVolunteerPage/BeAVolunteerPage";
import PrivateRoute from "./PrivateRoute";
import ManageMyPostPage from "../pages/ManageMyPostPage/ManageMyPostPage";
import UpdateManageProfileData from "../pages/UpdateManageMyProfileData/UpdateManageProfileData";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/allVoNeePost',
                element:<AllVoNeePostPage></AllVoNeePostPage>
            },
            {
                path:'addVoNeedPost',
                element:<PrivateRoute><AddVoNeePostPage></AddVoNeePostPage></PrivateRoute>
            },
            {
                path:'/volunteerNeedDetails/:id',
                element:<VolunteerNeedDetailsPage></VolunteerNeedDetailsPage>
            },
            {
                path:'/beAVolunteer/:id',
                element:<BeAVolunteerPage></BeAVolunteerPage>
            },
            {
                path:'/manageMyPost',
                element:<ManageMyPostPage></ManageMyPostPage>
            },
            {
                path:'/updateManagePost/:id',
                element:<UpdateManageProfileData></UpdateManageProfileData>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            }
        ]
    }
])

export default router