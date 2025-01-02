// Essentials
import React from "react";

function FooterObject(props) {
    return (
        <ul className="InventoryObject">
            {<img src={props.img} className="InventoryIcon"></img>}
            <h4>{props.value}</h4>
        </ul>
    )
}

export default FooterObject;