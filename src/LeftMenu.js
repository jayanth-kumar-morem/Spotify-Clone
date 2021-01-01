import React from "react";
import "./LeftMenu.css"
import HomeIcon from '@material-ui/icons/Home';
import MenuItem1 from "./MenuItem-1";
import SearchIcon from '@material-ui/icons/Search';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayForWorkOutlinedIcon from '@material-ui/icons/PlayForWorkOutlined';
const LeftMenu = () => {
    return(
        <div className="leftmenu">
            <img className="logo" src="https://pinupsandpompadours.com/wp-content/uploads/2020/09/Spotify_Logo_RGB_White.png" />
            <div className="list">
                <MenuItem1 Icon={HomeIcon} text={"Home"} />
                <MenuItem1 Icon={SearchIcon} text={"Search"} />
                <MenuItem1 Icon={PlaylistPlayIcon} text={"Your Library"} />
            </div>
            <hr />
            <p className="playlist">PLAYLISTS</p>
            <div className="list">
                <MenuItem1 Icon={AddBoxIcon} text={"Create Playlist"} />
                <MenuItem1 Icon={FavoriteIcon} text={"Liked Songs"} />
                <MenuItem1 Icon={PlaylistPlayIcon} text={"Your Library"} />
            </div>
            <hr />
            <div className="list">
                <MenuItem1 text={"Create Playlist"} />
                <MenuItem1 text={"Liked Songs"} />
                <MenuItem1 text={"Your Library"} />
            </div>
            {/* <div className="download">
                <MenuItem1 className="downloadText" Icon={PlayForWorkOutlinedIcon} text={"Install App"} />
            </div> */}
        </div>
    )
}
export default LeftMenu;