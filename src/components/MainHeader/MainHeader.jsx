import "./MainHeader.css";
import Button from "@mui/material/Button";
import {
  faSearch,
  faPenRuler,
  faArrowAltCircleLeft,
  faCartShopping,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../hooks/axios";
import { getUserData } from "../../store/features/auth/authSlice";

const MainHeader = () => {
  const redux = useSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLogin(true);
    }
  }, []);
  const [user, setUser] = useState();
  const onInfo = (data) => {
    // navigate("/login  ");
    axiosInstance
      .get(`/api/v1/accounts/get_my_info/`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        console.log(res.data);
        setUser(res?.data?.role);
        // dispatch(getUserData(res.data));
      })
      .then((res) => {
        // Navigate("/");
        console.log(user);
        setIsLogin(true);
      })
      .catch((res) => {
        console.log(res.data);
        console.log("kir shodam");
        // setError('phone_number',{type:'requr',message})
      });
  };
  useEffect(() => {
    onInfo();
  }, []);
  return (
    <div className="mainHeader__container">
      <div className="mainHeader__right">
        <Link to="/basket" className="mainHeader__shop_icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        {isLogin ? (
          <>
            <Link
              to="/dashboard"
              className="headerUp__design headerUp__design-primary headerUp__user"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <div className="headerUp__design headerUp__design-primary  headerUp__user2">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </>
        ) : (
          <Link className="link" to="/Login">
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
            >
              ورود | ثبت نام <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </Button>
          </Link>
        )}
        <Link
          to={user === "CUS" ? "/dashboard" : "/learn"}
          style={{ textDecoration: "none" }}
        >
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
            طراحی کنید
            <div>
              <FontAwesomeIcon icon={faPenRuler} />
            </div>
          </Button>
        </Link>
      </div>
      <div className="mainHeader__left">
        <div className="mainHeader__search">
          <div className="mainHeader__searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            dir="rtl"
            placeholder="جست و جو کنید"
            className="mainHeader__input"
          />
        </div>
        <Link to="/" className="mainHeader__icon"></Link>
      </div>
    </div>
  );
};

export default MainHeader;
