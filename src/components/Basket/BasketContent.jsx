import React, { useState } from "react";
import "./BasketContent.css";
import BasketProduct from "./BasketProduct";
import emptyBasketImage from "../../assets/imgs/empty-basket.png";

function BasketContent() {
  const products = JSON.parse(localStorage.getItem("basket"));
  const [isEmpty, setEmpty] = useState(products?.length == 0 ? true : false);

  return (
    <div className="basket">
      <h4 className="basketTitle">سبد خرید شما</h4>
      {!isEmpty ? (
        <>
          {products?.map((e) => (
            <BasketProduct product={e} />
          ))}
        </>
      ) : (
        <div className="emptyBasket">
          <img className="emptyBasketImage" src={emptyBasketImage} alt="" />
          <p>سبد خرید شما خالی است!</p>
        </div>
      )}
    </div>
  );
}

export default BasketContent;
