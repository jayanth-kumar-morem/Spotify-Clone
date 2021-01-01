import React from "react"
import "./Banner.css"
import PersonIcon from '@material-ui/icons/Person';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const Banner = ({title,author}) => (
    <div className="banner">
        <div className="left">
            <img src="https://i.scdn.co/image/ab67616d00001e0222b2a5403f63171dc5b78e55" alt="" />
        </div>
        <div className="right">
            <span className="single">SINGLE</span>
            <h1 className="title">{title}</h1>
            <div className="details">
                <span><PersonIcon className="author-icon" />
                <p className="author">{author}</p></span>
                <span><FiberManualRecordIcon className="dot"/><p>2019</p></span>
                <span><FiberManualRecordIcon className="dot" /><p>2 min 54 sec</p></span>
            </div>
        </div>
    </div>
)
export default Banner;