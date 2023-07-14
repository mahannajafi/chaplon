import "./DesignInfo.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../hooks/axios";

const DesignInfo = ({ product, state }) => {
  console.log(state);
  const navigate = useNavigate();
  const availableProductColors = state?.colors?.map((e) => e?.code);
  const [postProduct, setPostProduct] = useState({
    name: "",
    desc: "",
    design_image: "",
    prototype_image: "",
    price: 0,
    blank_product: product?.id,
    designer: 2,
    provider: 1,
    colors: [10, 9],
  });

  const [productColors, setProductColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [designFile, setDesignFile] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);
    axiosInstance
      .post("/api/v1/store/post-product-image", formData)
      .then((res) => {
        console.log(res);
      });
  };
  const handleProductColorSelection = (event, color) => {
    event.preventDefault();

    if (!productColors.includes(color)) {
      setProductColors([...productColors, color]);
    } else {
      setProductColors(
        productColors.filter((productColor) => productColor !== color)
      );
    }
  };
  useEffect(() => {
    setPostProduct({ ...postProduct, blank_product: product?.id });
  }, [product]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setPostProduct({ ...postProduct, provider: state?.provider?.id });
    // axiosInstance.post("/api/v1/store/products/", postProduct).then(() => {
    //   console.log("done");
    // });
    navigate("/");
    console.log(postProduct);
  };

  return (
    <div className="design-info">
      <h3 className="design-info__header">
        تکمیل اطلاعات محصول و بارگذاری طرح و محصول طراحی شده
      </h3>

      <form className="design-info__form">
        <div className="design-info__form__product-info">
          <h4 className="design-info__form__product-info__title">
            اطلاعات محصول
          </h4>

          <div className="design-info__form__row">
            <label className="design-info__form__label">
              نام&nbsp;محصول&nbsp;:
              <input
                type="text"
                value={postProduct.name}
                onChange={(event) =>
                  setPostProduct({ ...postProduct, name: event.target.value })
                }
                className="design-info__form__label__input product-name-input"
              />
            </label>

            <div className="design-info__form__vertical-line"></div>

            <label className="design-info__form__label">
              توضیحات&nbsp;:
              <textarea
                value={postProduct.desc}
                onChange={(event) =>
                  setPostProduct({ ...postProduct, desc: event.target.value })
                }
                className="design-info__form__label__input"
              />
            </label>
          </div>
        </div>

        <hr className="design-info__form__horizontal-line" />

        <div className="design-info__form__row">
          <label className="design-info__form__label">
            رنگ&nbsp;ها&nbsp;:
            <div className="design-info__form__colors-container">
              {availableProductColors.map((color, index) => {
                return (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    onClick={(event) =>
                      handleProductColorSelection(event, color)
                    }
                    className={`design-info__form__colors-container__color 
                  ${productColors.includes(color) ? "color-btn-active" : ""}`}
                  >
                    {productColors.includes(color) ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        inverse
                        className="check-icon"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </label>

          <div className="design-info__form__vertical-line"></div>

          <label className="design-info__form__label">
            قیمت&nbsp;نهایی&nbsp;: بین مبلغ {state?.price} و{" "}
            {+state?.price + 30000}
            <input
              type="text"
              value={postProduct.price}
              onChange={(event) =>
                setPostProduct({ ...postProduct, price: event.target.value })
              }
              className="design-info__form__label__input product-name-input"
            />
            <div>{finalPrice}</div>
          </label>
        </div>

        <div className="design-info__form__upload-files">
          <h4 className="design-info__form__upload-files__title">بارگذاری</h4>

          <div className="design-info__form__row">
            <label className="design-info__form__label">
              طرح&nbsp;:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="design-info__form__label__input custom-file-input"
              />
            </label>

            <label className="design-info__form__label">
              محصول&nbsp;طراحی&nbsp;شده&nbsp;:
              <input
                type="file"
                // onChange={(event) =>
                //   setDesignedProductFile(event.target.files[0])
                // }
                className="design-info__form__label__input custom-file-input"
              />
            </label>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="design-info__form__submit-btn"
          >
            ثبت نهایی
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesignInfo;
