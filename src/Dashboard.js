import React from "react";
import Controls from "./Controls";
import "./Dashboard.css"
import LeftMenu from "./LeftMenu"
import Right from "./Right"
const Dashboard = ()=>(
    <div className="dashboard" >
        <div className="top">
            <LeftMenu />
            <Right />
        </div>
        <div >
        <Controls className="bottom" />
        </div>
    </div>
    // LeftMenu
    // Right
)
export default Dashboard;