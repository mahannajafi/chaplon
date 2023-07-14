import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import MainHeader from "../MainHeader/MainHeader";
import MiniNavbar from "../MiniNavbar/MiniNavbar";
import "./dashboardLayout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import {
  getUserData,
  logOut,
  setDashboard,
} from "../../store/features/auth/authSlice";
import axiosInstance from "../../hooks/axios";
import Address from "../Address/Address";
import AboutMe from "../AboutMe/AboutMe";
import Orders from "../Order/Orders";
import Message from "../Message/Message";
import Statistics from "../Statistics/Statistics";
import UserDesigns from "../Design/Design";

const DashboardLayout = ({ children }) => {
  const redux = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!redux.isLogin) navigate("/login");
  // }, []);
  const onInfo = (data) => {
    // navigate("/login  ");
    axiosInstance
      .get(`/api/v1/accounts/get_my_info/`)
      .then((res) => {
        dispatch(getUserData(res.data));
      })
      .catch((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <MainHeader />
      <MiniNavbar />
      <div className="superCon">
        <div className="dashboard__container">
          <div className="dashboard__items">
            <div className="header">{redux?.dashboard}</div>
            {redux?.dashboard === "ادرس های من" ? <Address /> : ""}
              {redux?.dashboard === "اطلاعات کاربری" ? <AboutMe /> : ""}
              {redux?.dashboard === "طرح های من" ? <UserDesigns /> : ""}
              {redux?.dashboard === "پیام های من" ? <Message /> : ""}
              {redux?.dashboard === "سفارش های من" ? <Orders /> : ""}
              {redux?.dashboard === "آمار فروش" ? <Statistics /> : ""}
          </div>
          <div className="dashboard__menu">
            <div className="dashboard__userCon">
              <div className="dashboard__userpic">
                <PersonRoundedIcon
                  sx={{
                    width: "70px",
                    height: "70px",
                    color: "var(--main-color)",
                  }}
                />
              </div>
              <div className="dashboard__username">
                {redux?.userData ? redux?.userData?.username : "نام کاربری"}
              </div>
              <div className="dashboard__balance">موجودی : 0 تومان</div>
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
                  width: "85%",
                }}
                variant="contained"
              >
                برداشت
              </Button>

              <div className="dashboard__options">
                <div
                  className={
                    redux?.dashboard === "اطلاعات کاربری"
                      ? "dashboard__option active"
                      : "dashboard__option"
                  }
                  onClick={() => {
                    dispatch(setDashboard("اطلاعات کاربری"));
                  }}
                >
                  اطلاعات کاربری
                  <PersonIcon className="menuIcons" />
                </div>
                <div
                  className={
                    redux?.dashboard === "ادرس های من"
                      ? "dashboard__option active"
                      : "dashboard__option"
                  }
                  onClick={() => {
                    dispatch(setDashboard("ادرس های من"));
                  }}
                >
                  ادرس های من
                  <MapsHomeWorkIcon className="menuIcons" />
                </div>
                <div
                  className={
                    redux?.dashboard === "سفارش های من"
                      ? "dashboard__option active"
                      : "dashboard__option"
                  }
                  onClick={() => {
                    dispatch(setDashboard("سفارش های من"));
                  }}
                >
                  سفارش های من
                  <WorkOutlineIcon className="menuIcons" />
                </div>
                {redux?.userData?.role === "CUS" ? (
                  ""
                ) : (
                  <>
                    <div
                      className={
                        redux?.dashboard === "طرح های من"
                          ? "dashboard__option active"
                          : "dashboard__option"
                      }
                      onClick={() => {
                        dispatch(setDashboard("طرح های من"));
                      }}
                    >
                      طرح های من
                      <DesignServicesIcon className="menuIcons" />
                    </div>
                    <div
                      className={
                        redux?.dashboard === "آمار فروش"
                          ? "dashboard__option active"
                          : "dashboard__option"
                      }
                      onClick={() => {
                        dispatch(setDashboard("آمار فروش"));
                      }}
                    >
                      آمار فروش
                      <EqualizerIcon className="menuIcons" />
                    </div>
                  </>
                )}
                <div
                  className={
                    redux?.dashboard === "پیام های من"
                      ? "dashboard__option active"
                      : "dashboard__option"
                  }
                  onClick={() => {
                    dispatch(setDashboard("پیام های من"));
                  }}
                >
                  پیام های من
                  <MailOutlineIcon className="menuIcons" />
                </div>
                <div
                  className="dashboard__option"
                  onClick={() => {
                    dispatch(logOut(""));
                    navigate("/");
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("refresh_token");
                    localStorage.removeItem("basket");
                  }}
                >
                  خروج
                  <LogoutIcon className="menuIcons" />
                </div>
              </div>
              <div className="ertegh">
                <Button
                  sx={{
                    bgcolor: "var(--second-color)",
                    color: "var(--main-color)",
                    border: "1px solid var(--main-color)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    marginTop: "35px",
                    "@media (max-width: 500px)": {
                      display: "none",
                    },
                    width: "85%",
                  }}
                  variant="contained"
                  onClick={() => {
                    axiosInstance
                      .post("/api/v1/accounts/promote_to_designer/")
                      .then(() => {
                        onInfo();
                      });
                  }}
                >
                  {redux?.userData?.role === "CUS"
                    ? "ارتقا به طراح"
                    : "اکانت ویژه"}{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
