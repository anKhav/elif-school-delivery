import {NavLink} from "react-router-dom";
import './header.css'


const Header = () => {
    return (
        <header className='header'>
            <nav className="nav">
                <NavLink to='/' className='nav__link'>Shop</NavLink>
                <NavLink to='/cart' className='nav__link'>Shopping Cart</NavLink>
                <NavLink to='/history' className='nav__link'>History</NavLink>
                <NavLink to='/coupons' className='nav__link'>Coupons</NavLink>
            </nav>
        </header>
    );
};

export default Header;