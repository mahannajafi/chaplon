import React from "react";
import "./OrderSection.css"

function OrderSection({productImage , productName , productSize , productColor}) {
    return (
        <>
            <div className="orderContent">
                <div className="orderImageContainer">
                    <img src={productImage} alt="" />
                </div>
                <div className="orderDesc">
                    <p>{productName}</p>
                    <p>سایز:<div className="productSize">{productSize}</div></p>
                    <p>رنگ:<div className="orderColor" style={{backgroundColor:productColor}}></div></p>
                </div>
            </div>
        </>
    )
}

export default OrderSection;