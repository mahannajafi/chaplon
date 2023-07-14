import React, {useEffect, useState} from "react";
import "./Statistics.css"
import image from "../../assets/imgs/swishert.png"
import axios from "axios";

export default function Statistics () {
    const [statistics, setStatistics] = useState([]);
    const [income , setIncome] = useState(0)
    const [num , setNum] = useState(0)
    // var income:Number = 0

    useEffect(() => {
        axios.get(`https://3d117861-3610-42d8-b43a-47843da3c02e.mock.pstmn.io/statistic`)
            .then((res) => {
                setStatistics(res.data);
                // console.log(res.data);
            });
    }, []);

    useEffect(() => {
        statistics.map((item)=>{
            // console.log(typeof item?.price)
            setIncome(income + (item?.number * item?.price))
            setNum(num + item?.number)
        })
    }, [statistics]);

    return (
        <div className="statisticsContainer">
            <div className="statistic">
                <p>آمار کل فروش: {num}</p>
                <p>میزان کل درآمد: {income}</p>
            </div>
            {statistics?.map((item) => {
                return (
                    <div key={item.key} className="statistics">
                        <div className="statisticsTitle">
                            <h4>{"نام محصول"}</h4>
                        </div>
                        <div className="statisticContent">
                            <div className="statisticImageContainer">
                                <img src={image} alt="" />
                            </div>
                            <div className="statisticsDesc">
                                <p>نام تولید کننده</p>
                                <p>{item?.providerName}</p>
                            </div>
                            <div className="statisticsDesc">
                                <p>تعداد فروش</p>
                                <p>{item?.number}</p>
                            </div>
                            <div className="statisticsDesc">
                                <p>قیمت محصول</p>
                                <p>{item?.price} تومان</p>
                            </div>
                            <div className="statisticsDesc">
                                <p>مجموع درآمد</p>
                                <p>{item?.number * item?.price} تومان</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}