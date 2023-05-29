import Header from "../header/header.tsx";
import {Outlet} from "react-router-dom";


const Dashboard = () => {
    return (
        <>
          <Header/>
          <Outlet/>
        </>
    );
};

export default Dashboard;