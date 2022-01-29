import React from "react";


export const NextArrow = (props) => {
    return (
        <>
            <div 
            className={props.className}
            style={{...props.style, backgroundColor: "black"}}
            onClick={props.onClick}
             />
        </>
    );
};

export const PreArrow = (props) => {
    return (
        <>
            <div {...props} />
        </>
    );
};