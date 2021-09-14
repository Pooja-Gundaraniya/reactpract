import React, { useContext, useState } from 'react';
import Product from "./product";
import { data } from "./data";
import { Iproducts } from './interface';

export default function Display() {
    const [itemsInCart, setItemsInCart] = useState(0);
    const [isSideCartOpen, setIsSideCartOpen] = useState(false);
    const [products, setProducts] = useState<Iproducts[]>([]);

    const [ctitle, setCtitle] = useState("")

    const updateCartItems = (id: number) => {
        setItemsInCart(itemsInCart + 1);
        setProducts((data.filter(item => item.id === id)))
    }
    const showSideCart = () => {
        isSideCartOpen ? setIsSideCartOpen(false) : setIsSideCartOpen(true);
    }
    return (
        <>
            <button className="cartcount" onClick={showSideCart}>
                Cart Items({itemsInCart})
            </button>
            <aside className={`${isSideCartOpen ? 'sidecart show-sidecart' : 'sidecart'}`}>
                {
                    products.map((item) => {
                        const { itemTitle, itemUrl, itemPrice } = item;
                        return (
                            <div className="inside">
                                <h6>{itemTitle}</h6><p className="price">Rs.{itemPrice}</p>
                            </div>
                        )
                    })
                }
            </aside>


            <div className="products">
                <Product data={data} updateCartItems={updateCartItems} />
            </div>

        </>
    )
}