import "../NavBar/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            <Link to='/' className="link"><h1>TodoMovil</h1></Link>
            
            <div>
            <button className="m-4" ><NavLink to={`/category/smartphone`} className="m-4 link" >SmartPhones</NavLink></button>
            <button className="m-4" ><NavLink to={`/category/tablet`} className="m-4 link" >Tablets</NavLink></button>
            <button className="m-4" ><NavLink to={`/category/smartwatch`} className="m-4 link">SmartWatchs</NavLink></button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar