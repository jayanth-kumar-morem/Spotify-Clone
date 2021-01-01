import React from "react"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';import "./SongsList.css"
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import TimerSharpIcon from '@material-ui/icons/TimerSharp';
import SongListItem from "./SongListItem";

const SongsList = ()=>(
    <div className="songslist">
        {/* <div className="background" /> */}
        <div className="icons">
            <PlayArrowSharpIcon className="play-icon icon" />
            <FavoriteBorderIcon className="love-icon icon" />
            <MoreHorizIcon className="options-icon icon"/>
        </div>
        <div className="tile-heading">
            <p className="title-text"># &nbsp;&nbsp;  TITLE</p>
            <TimerSharpIcon  className="time-icon"/>
        </div>
        <hr />
        <div className="songs">
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
            <SongListItem index={1} name={"Better"} author={"Ananya Birla"} time={"2:54"}/>
        </div>
    </div>
)
export default SongsList;