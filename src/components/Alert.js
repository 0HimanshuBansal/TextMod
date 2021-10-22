import React from "react";

export default function Alert(props) {
    return (
        props.alert &&
        <div className="alert alert-info fixed-top" role="alert">
            {props.alert.msg} <strong>{props.alert.msg2}</strong>
        </div>
    )
}