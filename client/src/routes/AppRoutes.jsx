import {Routes, Route} from "react-router";
import Dashboard from "../pages/user/Dashboard";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    );
}

export default AppRoutes;