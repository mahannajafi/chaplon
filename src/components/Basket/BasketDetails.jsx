import "./BasketDetails.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function BasketDetails() {
  const products = JSON.parse(localStorage.getItem("basket"));
  const all = products
    .map((item) => +item.price)
    .reduce((prev, next) => prev + next);
  console.log(all);
  return (
    <div className="basketDetailsContainer">
      <div className="basketDetailsTitle">
        <h4>حساب شما</h4>
        <div className="basketIconContainer">
          <p>{products.length}</p>&nbsp;
          <div>
            <ShoppingBasketIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
      <p className="basketDetailsText">مجموع قیمت محصولات</p>
      <div className="basketDetailsPrice">{all} تومان</div>
      <p className="basketDetailsText">سود شما از خرید</p>
      <div className="basketDetailsPrice">{0} تومان</div>
      <p className="basketDetailsText">مقدار پرداختی شما</p>
      <div className="basketDetailsPrice">{all} تومان</div>
      <button className="continueShop">ادامه ی فرآیند خرید</button>
    </div>
  );
}

export default BasketDetails;
