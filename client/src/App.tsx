import Header from "./layouts/header/header.tsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./layouts/dashboard/dashboard.tsx";
import Shop from "./pages/shop/shop.tsx";
import Cart from "./pages/cart/cart.tsx";
import History from "./pages/history/history.tsx";
import Coupons from "./pages/coupons/coupons.tsx";
import AsideLayout from "./layouts/asideLayout/asideLayout.tsx";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route path='/' element={<AsideLayout/>}>
                    <Route path='/' element={<Shop/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Route>
                <Route path='/history' element={<History/>}/>
                <Route path='/coupons' element={<Coupons/>}/>
            </Route>
        </Routes>
    );
};

export default App;
