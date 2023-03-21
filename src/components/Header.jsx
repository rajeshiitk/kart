import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag , FiHome} from "react-icons/fi";
import { useSelector } from 'react-redux';
import logo from "../assets/grl.png";
const Header = () => {

    const { cartItem } = useSelector(state => state.cart)
    return (
        <nav>
            <div>
                <h2>Kart</h2>
                <img src={logo} alt="" />
            </div>


            <div>
                <Link to={'/'} ><FiHome /></Link>
                <Link to={'/cart'} >
                    <FiShoppingBag />
                    <p>{cartItem.length}</p>
                </Link>

            </div>
        </nav>
    )
}

export default Header