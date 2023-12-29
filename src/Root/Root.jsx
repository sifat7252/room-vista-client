import { Outlet } from "react-router-dom";
import FirstNavbar from "../Component/Navbar/FirstNavbar";
import SecondNavbar from "../Component/Navbar/SecondNavbar";


const Root = () => {
    return (
        <div>
            <FirstNavbar></FirstNavbar>
            <SecondNavbar></SecondNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;