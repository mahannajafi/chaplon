import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "0 10px",
        marginTop: "40px",
      }}
      dir="rtl"
    >
      <label style={{ width: "45%" }}>
        نام اصلی :{" "}
        <input
          disabled
          style={{ height: "50px" }}
          type="text"
          className="design-info__form__label__input product-name-input"
        />
        <div></div>
      </label>
      <label style={{ width: "45%" }}>
        نام خوانوادگی :{" "}
        <input
          disabled
          style={{ height: "50px" }}
          type="text"
          className="design-info__form__label__input product-name-input"
        />
        <div></div>
      </label>
      <label style={{ width: "45%" }}>
        شماره همراه:{" "}
        <input
          disabled
          style={{ height: "50px" }}
          type="text"
          className="design-info__form__label__input product-name-input"
        />
        <div></div>
      </label>
      <label style={{ width: "45%" }}>
        شماره حساب:
        <input
          disabled
          style={{ height: "50px" }}
          type="text"
          className="design-info__form__label__input product-name-input"
        />
        <div></div>
      </label>
      <label style={{ width: "45%" }}>
        رمز عبور:
        <input
          disabled
          style={{ height: "50px" }}
          type="text"
          className="design-info__form__label__input product-name-input"
        />
        <div></div>
      </label>
    </div>
  );
};

export default AboutMe;
