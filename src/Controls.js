import React from "react"
import "./Controls.css"
import Cookies from 'js-cookie'
import SpotifyPlayer from 'react-spotify-player';

const Controls = () =>{
    const token = Cookies.get('spotifyAuthToken')
    const size = {
        width: '100%',
        height: 300,
      };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'
    return(
        <div className="controls">
            <SpotifyPlayer
            uri="spotify:album:3oIFxDIo2fwuk4lwCmFZCx"
            size={size}
            view={view}
            theme={theme}
            />
        </div>
    )
}
export default Controls;