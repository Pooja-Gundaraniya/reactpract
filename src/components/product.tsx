import React, { useContext } from "react";
import Banner from "./banner"

type props = {
    data: {
        id: number,
        itemBrand: string,
        itemTitle: string,
        itemUrl: string,
        itemPrice: number,
        deliveryStatus: string,
    }[],
    updateCartItems(id: number): void
}
const Product = ({ data, updateCartItems }: props) => {
    return (
        <section className="container">
            <Banner />
            <div className="products">
                {data.map((item) => {
                    // <div className="product">
                        const {itemBrand, itemTitle, itemUrl, itemPrice, deliveryStatus, id} = item;

                        return <div className="item"> 
                        <img src={itemUrl} alt=""></img>
                        <div className="productdetail">
                            <div className="productname">
                                {itemBrand}
                            </div>
                            <div className="productname">
                                {itemTitle}
                            </div>
                            <div className="productprice">
                                INR{itemPrice}.00
                            </div>
                            <div className="productname">
                                {deliveryStatus}
                            </div>
                        </div>
                            <div className="btnctn">
                                <button className="addtocart" onClick={() => updateCartItems(id)}>Add to cart</button>
                            </div>
                        </div>
        
                })}
            </div>
        </section>
    )
}
export default Product;