import React from "react"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import "./Header.css"
import Banner from "./Banner";

const name= "Jayanth Kumar"
const Header = () => (
    <div className="header">
        <div className="left">
            <ChevronLeftIcon className="left-arrow arrow"/>
            <ChevronRightIcon className="right-arrow arrow" />
        </div>
        <div className="right">
            <button className="upgrade">UPGRADE</button>
            <button className="name"><PersonIcon/><span>{`${name.substring(0,7)}...`}</span></button>
        </div>
    </div>
)
export default Header;