import * as React from "react";

export default function Icon(props){
    return (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#icon-${props.symbolName}`}>xxx</use>
        </svg>
    )
}