import React from "react"
import "./MenuItem-1.css"

const MenuItem1 = ({Icon,text}) => (
    <div className="menuitem1">
        {Icon && <Icon className="icon"/> }
        <p>{text}</p>
     </div>
)

export default MenuItem1;