import React, {useEffect, useState} from "react"
import "./Orders.css"
import axios from "axios";
import OrderSection from "./OrderSection";
import image from "../../assets/imgs/swishert.png";
import CloseIcon from "@mui/icons-material/Close";

export default function Orders () {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`https://a08a0bed-bc97-4467-9540-f78a5fad8c98.mock.pstmn.io/order`)
            .then((res) => {
                setOrders(res.data);
                console.log(1);
                console.log(orders);
            });
    }, []);

    const [isClose, setClose] = useState(true);

    return (
        <>
            <div>
                {orders?.map((item) => {
                    return (
                        <div className="order" key={item.key}>
                            <div className="orderTitle">
                                <h4>وضعیت سفارش: {item?.status === true ? "تحویل داده شده" : "به پست تحویل داده شده"}</h4>

                                <h5><p className="orderTitleDetails">تاریخ ثبت سفارش : {item?.date}</p>|
                                    <p className="orderTitleDetails">کد سفارش : {item?.orderCode}</p>|
                                    <p className="orderTitleDetails">مبلغ : {item?.price}</p>
                                </h5>
                            </div>
                            {item?.products?.map((p)=>(
                                <OrderSection productImage={image} productName={p?.name} productSize={p?.size} productColor={p?.color} />
                            ))}
                            <div className="orderAddress">{item?.address}</div>
                            {item.status ? <div className="orderDate">تاریخ تحویل : {item?.sendDate}</div> : ""}
                            <div className="orderButtonContainer">
                                {item.status ? <button className="orderButton">مشاهده ی فاکتور</button> :
                                    <button className="orderButton" onClick={()=>setClose(false)}>پیگیری وضعیت سفارش</button>}
                            </div>
                            <div className="orderTrack" style={{display: (isClose === false) && "block"}}>
                                <div className="orderTrackHeader">
                                    <p>پیگیری سفارش</p>
                                    <CloseIcon onClick={()=>setClose(true)} />
                                </div>
                                <form className="orderTrackForm">
                                    <label>متن پیام :</label>
                                    <textarea />
                                    <button className="orderTrackButton">ارسال به ادمین</button>
                                </form>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}