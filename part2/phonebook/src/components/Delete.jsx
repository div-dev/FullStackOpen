import React from "react";

export const DeleteButton = ({btnText , onClick})=>{
    return(
        <button onClick={onClick}>{btnText}</button>
    )
}