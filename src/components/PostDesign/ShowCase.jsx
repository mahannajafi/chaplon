import "./ShowCase.css";
import sweatshirt from "../../assets/imgs/swishert.png";

const ShowCase = ({ product }) => {
  return (
    <>
      <div className="showcase">
        <div className="showcase__image-selection">
          <div className="showcase__image-selection__first"></div>
          <div className="showcase__image-selection__second"></div>
          <div className="showcase__image-selection__third"></div>
        </div>

        <div className="showcase__image-box">
          <img src={product?.blank_product_images[0]?.image} alt="" />
        </div>

        <div className="showcase__limits-description">
          <h1 className="showcase__limits-description__title">محدودیت ها</h1>
          <p className="showcase__limits-description__text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
          <button className="showcase__limits-description__btn">
            <a
              style={{ color: "var(--second-color)", textDecoration: "none" }}
              href="https://cdn11.bigcommerce.com/s-405b0/images/stencil/590x590/products/107/10322/5000B_White_Front__97777.1603145244.jpg?c=2"
              download="blanck"
              target="_blank"
            >
              دانلود طرح خام
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
