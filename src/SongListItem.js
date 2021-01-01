import React from "react"
import "./SongListItem.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const SongListItem =({index,name,author,time})=>(
    <div className="songListItem">
        <div className="left_details">
            <h6 className="index">{index}</h6>
            <div className="details">
                <h6 className="name">{name}</h6>
                <h6 className="author">{author}</h6>
            </div>
        </div>
        <div className="right">
            <FavoriteBorderIcon className="love-icon" />
            <span>{time}</span>
            <MoreHorizIcon className="options-icon" />
        </div>
    </div>
)
export default SongListItem;