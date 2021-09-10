import React from 'react'
import Cart from '../assets/shopping-cart.png'
const Navbar = () => {
    return (
        <nav>
            <ul className="left">
                <li><a href="">India express</a></li><br/>
            </ul>
            <ul className='right'>
                <li><a href="">
                <span className="shoppingCart"><img classname ="i"style={{height: 30}} src={Cart} alt=""/>
                <span className="cartcount">0</span>                
                </span>
                </a></li>
            </ul> 
        </nav>
    )
}
export default Navbar;
