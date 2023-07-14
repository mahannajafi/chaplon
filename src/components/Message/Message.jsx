import React, {useEffect, useState} from "react";
import "./Message.css"
import axios from "axios";

export default function Message () {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(`https://92bf05fd-13bd-4a98-8739-3797d6456a43.mock.pstmn.io/message`)
            .then((res) => {
            setMessages(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="messages">
            {messages?.map((item) => {
                return (
                    <div className="message" key={item.key}>
                        <div className="messageTitle">
                            <h4>{item.title}</h4>
                        </div>
                        <div className="messageContent">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}