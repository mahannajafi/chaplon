import { Button } from "@mui/material";
import "./address.css";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/axios";

const Address = () => {
  const [isClose, setClose] = useState(true);
  const [id, setId] = useState("1");
  const [addresses, setAddresses] = useState();
  const [addAddress, setAddAdress] = useState({
    detail: "",
    post_code: "",
    phone_number: "",
    is_default: true,
    city: 1,
  });
  const firstFetch = () => {
    axiosInstance.get(`/api/v1/accounts/my_addresses/`).then((res) => {
      console.log(res?.data?.results);
      setAddresses(res?.data?.results);
    });
  };
  useEffect(() => {
    firstFetch();
  }, []);
  return (
    <div className="address__container">
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {addresses?.length === 0 ? "آدرسی اضافه نشده است" : ""}
      </div>
      {addresses?.map((object) => (
        <div className="address__card">
          <div className="address__header">
            <div className="addressHeaderRight">
              <Button
                sx={{
                  bgcolor: "var(--main-color)",
                  color: "var(--second-color)",
                  border: "1px solid var(--second-color)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 15px",
                  borderRadius: "8px",
                }}
                variant="contained"
                onClick={() => {
                  axiosInstance
                    .delete(`/api/v1/accounts/my_addresses/${object?.id}/`)
                    .then((res) => {
                      console.log(res);
                      firstFetch();
                    });
                }}
              >
                حذف آدرس <DeleteIcon />
              </Button>
              <Button
                sx={{
                  bgcolor: "var(--second-color)",
                  color: "var(--main-color)",
                  border: "1px solid var(--main-color)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 15px",
                  borderRadius: "8px",
                  marginLeft: "10px",
                  "@media (max-width: 500px)": {
                    display: "none",
                  },
                }}
                variant="contained"
              >
                ویرایش آدرس
                <EditIcon />
              </Button>
            </div>
            <div className="addressHeaderLeft">
              {object?.detail}: عنوان آدرس
            </div>
          </div>
          <div className="addressContent">
            <iframe
              className="addressLocation"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1511.0223042248701!2d11.145848269494113!3d52.732572334659714!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2snl!4v1685549452683!5m2!1sfa!2snl"
            ></iframe>
            <div className="addressText">
              <div className="address__dec">
                <p>{object?.post_code}</p>
                <p>:کد پستی</p>
              </div>
              <div className="address__dec">
                <p>{object?.phone_number}</p>
                <p>:شماره همراه گیرنده</p>
              </div>
              <div className="address__dec">
                <p>{object?.customer?.base_user}</p>
                <p>:نام و نام خانوادگی گیرنده</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="addAddress" onClick={() => setClose(false)}>
        +
      </button>

      <div
        className="addAddressSection"
        style={{ display: !isClose && "block" }}
      >
        <div className="addAddressHeader">
          <CloseIcon
            onClick={() => {
              setClose(true);
            }}
          />
          <p>ادرس جدید</p>
        </div>
        <div className="addAddressContent">
          <div className="addAddressLocation">
            <LocationOnIcon className="locationIcon" sx={{ fontSize: 80 }} />
          </div>
          <form className="addAddressForm">
            <label className="addAddressLabel">
              نام و نام خانوادگی گیرنده
              <input className="design-info__form__label__input product-name-input" />
            </label>
            <label className="addAddressLabel">
              شماره همراه گیرنده
              <input
                className="design-info__form__label__input product-name-input"
                onChange={(e) =>
                  setAddAdress({ ...addAddress, phone_number: e.target.value })
                }
              />
            </label>
            {/* <label className="addAddressLabel">
              عنوان آدرس
              <input />
            </label> */}
            <label className="addAddressLabel">
              کد پستی
              <input
                className="design-info__form__label__input product-name-input"
                onChange={(e) =>
                  setAddAdress({ ...addAddress, post_code: e.target.value })
                }
              />
            </label>
            <label className="addAddressLabel">
              آدرس
              <input
                className="design-info__form__label__input product-name-input"
                onChange={(e) =>
                  setAddAdress({ ...addAddress, detail: e.target.value })
                }
              />
            </label>
            {/* <label className="addAddressLabel">
              پلاک
              <input />
            </label>
            <label className="addAddressLabel">
              واحد
              <input />
            </label> */}
          </form>
        </div>
        <button
          onClick={() => {
            console.log(addAddress);
            axiosInstance
              .post(`/api/v1/accounts/my_addresses/`, addAddress)
              .then(() => firstFetch());
            setClose(true);
          }}
          className="addAddressButton"
        >
          ثبت آدرس
        </button>
      </div>
    </div>
  );
};

export default Address;
