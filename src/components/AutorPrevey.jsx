import React from "react";

export const AutorPrevey = (props) => (
    <div className="list-group" onClick={props.onClick}>
        <h4>
            {props.shortInfo}
        </h4>

        <h6 style={{color:"red",fontSize:"12px"}}>
            {props.fullName}
        </h6>
        <div className="page-header"></div>
    </div>
);