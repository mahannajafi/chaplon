import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import "./rowProducts.css";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "../../hooks/axios";

const RowProducts = () => {
  let { state } = useLocation();
  const [data, setData] = useState([]);
  console.log(state);
  const [product, setProduct] = useState();

  const firstFetch = () => {
    axiosInstance
      .get(`/api/v1/design/blank_product/?category=${state?.id}`)
      .then((res) => {
        console.log(res?.data?.results);
        setProduct(res?.data?.results);
      });
  };
  useEffect(() => {
    firstFetch();
  }, []);
  return (
    <Layout>
      <div dir="rtl" className="Choose__container">
        <div className="Choose__items">
          <div className="Choose__titles"> محصولات خام :</div>
          <div className="Choose__Boxes">
            {product?.map((data) => {
              return (
                <Link
                  className="Link"
                  to={`/SingleRawProduct/${data?.id}`}
                  state={{ id: data.id }}
                >
                  <div className="Choose__Box">
                    <img
                      src={`https://chuplon-back.iran.liara.run/${data?.preview?.image}`}
                      alt={data?.alt_text}
                      className="Choose__Box-pic"
                    />
                    <div className="Choose__Box-title">{data?.title}</div>
                    <div className="Choose__Box-price">
                      {data?.average_price}
                      <div className="Choose__Box-price-thin">تومان</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="Choose__filter">
          <div className="Choose__title">فیلترها</div>
          <div className="Choose__item">کیف دستی</div>
          <div className="Choose__item">کوله پشتی</div>
          <div className="Choose__available">
            کالاهای موجود
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RowProducts;
