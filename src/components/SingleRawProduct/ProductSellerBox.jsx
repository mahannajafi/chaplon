import "./ProductSellerBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faL } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductSellerBox = ({ product, id }) => {
  return (
    <>
      <div className="product-seller-box">
        <h3 className="product-seller-box__title">{product?.provider?.name}</h3>
        <div className="product-info">
          <div className="product-info-box product-seller-box__available-colors">
            رنگ های موجود
            <br />
            {product?.colors?.map((e) => (
              <div
                className="color"
                style={{ backgroundColor: `${e?.code}` }}
              ></div>
            ))}
          </div>
          <div className="product-info-box product-seller-box__available-sizes">
            سایز های موجود
            <br />
            <FontAwesomeIcon icon={faL} className="size" />
            <FontAwesomeIcon icon={faM} className="size" />
          </div>
          <div className="product-info-box product-seller-box__address">
            آدرس
            <br />
            <div className="addressBox">
              {product?.provider?.address_detail}
            </div>
          </div>
          <div className="product-info-box product-seller-box__delivery-time">
            زمان آماده سازی
            <br />
            <div className="delivery-time">{product?.prep_time}</div>
          </div>
          <div className="product-info-box product-seller-box__price">
            قیمت:
            <span className="price">{product?.price} تومان</span>
            <button className="design-this-product-btn">
              <Link
                className="design-this-product-btn__link"
                to={`/Design/${id}`}
                state={product}
              >
                طراحی این محصول
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSellerBox;
