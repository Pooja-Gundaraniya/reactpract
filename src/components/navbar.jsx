import React from 'react' 
import Cart from '../assets/shopping-cart.png'
const Navbar = () => {
    return (
        <nav>
            <ul className="left">
                <li>India express</li><br/>
            </ul>
            <ul className='right'>
                <li>
                <span className="shoppingCart"><img className ="i"style={{height: 30}} src={Cart} alt=""/>
                <span className="cartcount">0</span>                
                </span>
                </li>
            </ul> 
        </nav>
    )
}
export default Navbar;
