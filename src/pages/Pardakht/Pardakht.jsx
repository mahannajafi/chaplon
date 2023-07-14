import { useEffect, useState } from "react";
import Address from "../../components/Address/Address";
import Layout from "../../components/layout/Layout";
import "./Pardakht.css";
import axiosInstance from "../../hooks/axios";
import { Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Pardakht = () => {
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
    <Layout>
      <div className="headerPardakht">
        <div className="headerPardakht__item">پرداخت </div>
        <div className="headerPardakht__item headerPardakht__item-center">
          انتخاب آدرس و زمان ارسال
        </div>
        <Link to="/basket" className="headerPardakht__item">
          سبد خرید
        </Link>
      </div>
      <div className="address__container">
        <h3 className="headerPardakht__title" dir="rtl">
          انتخاب ادرس
        </h3>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {addresses?.length === 0 ? "آدرسی اضافه نشده است" : ""}
        </div>
        {addresses?.map((object) => (
          <div className="address__card">
            <div className="address__header">
              <div className="addressHeaderRight"></div>
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
      </div>
    </Layout>
  );
};

export default Pardakht;
