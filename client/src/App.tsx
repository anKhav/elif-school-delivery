import {Route, Routes} from "react-router-dom";
import Dashboard from "./layouts/dashboard/dashboard.tsx";
import Shop from "./pages/shop/shop.tsx";
import Cart from "./pages/cart/cart.tsx";
import History from "./pages/history/history.tsx";
import Coupons from "./pages/coupons/coupons.tsx";
import {shops} from './data/shops.ts'
// @ts-ignore
import {makeRightUrlStr} from "./utils/functions.js"

import SingleShop from "./pages/singleShop/singleShop.tsx";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route path='/' element={<Shop/>}>
                    {
                        shops.map(shop => {
                            return <Route key={shop.id} path=':id' element={<SingleShop/>}/>
                        })
                    }
                </Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/history' element={<History/>}/>
                <Route path='/coupons' element={<Coupons/>}/>
            </Route>
        </Routes>
    );
};

export default App;
