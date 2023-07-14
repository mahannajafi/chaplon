import React, {useEffect, useState} from "react";
import "./Design.css"
import image from "../../assets/imgs/swishert.png"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Slider from '@mui/material/Slider';
import axios from "axios";

export default function UserDesigns () {
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        axios.get(`https://32ba9bf9-d6ce-4a68-99e9-11032f74ed9d.mock.pstmn.io/design`)
            .then((res) => {
                setDesigns(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div className="designContainer">
            {designs?.map((item) => {
                return (
                    <div className="design">
                        <div className="designTitle">
                            <h4>{item?.name}</h4>
                            <button><DeleteOutlineIcon />حذف طرح</button>
                        </div>
                        <div className="designContent">
                            <div>
                                <img src={image} alt="" />
                            </div>
                            <div className="desc">
                                <p>
                                    <h4 className="descTitle">توصیفات:</h4>
                                    <span>{item?.desc}</span>
                                </p>
                                <p className="price">
                                    <h4>قیمت:</h4>
                                    {/*<input min="40000" max="60000" type="range" defaultValue={50000} />*/}
                                    <Slider className="designedProductPrice"
                                            defaultValue={(item?.minPrice + item?.maxPrice) / 2} aria-label="Default"
                                            valueLabelDisplay="auto" min={item?.minPrice} max={item?.maxPrice} />
                                </p>
                                <div className="priceRange">
                                    <div>{item?.maxPrice}</div>
                                    <div>{item?.minPrice}</div>
                                </div>
                                <div className="designButtons">
                                    <button>اضافه به سبد خرید</button>
                                    <button>به فروش گذاشتن</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}