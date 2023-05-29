
import {Outlet} from "react-router-dom";

const AsideLayout = () => {
    return (
        <>
            <div>
                aside
            </div>
                <Outlet/>
        </>
    );
};

export default AsideLayout;