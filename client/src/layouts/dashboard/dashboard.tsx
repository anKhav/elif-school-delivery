import Header from "../header/header.tsx";
import {Outlet} from "react-router-dom";
import styles from './dashboard.module.css'


const Dashboard = () => {
    return (
        <div className={styles.section_outer}>
          <Header/>
          <Outlet/>
        </div>
    );
};

export default Dashboard;