import React from "react";
import '../App.css';

export function Card(props) {

    return (
        <div className="CardStyle">
            <img className="Image" src={props.item.avatar} />
            <div className="Name">
                {props.item.first_name}
            </div>
            <div className="LastName">
                {props.item.last_name}
            </div>
        </div>
    )
}