import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/user/Dashboard";
import Layout from "../components/layout/Layout";

function AppRoutes(){
    return (
        <Routes>
            {/* <Route path="/" element={< Dashboard /> } /> */}
            <Route 
                path="/" 
                element={
                    <Layout>
                        <Dashboard />
                    </Layout>
                }
            />
        </Routes>
    );
}

export default AppRoutes;