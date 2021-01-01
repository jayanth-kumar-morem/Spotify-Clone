import React from "react"
import "./Controls.css"
import Cookies from 'js-cookie'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AirplaySharpIcon from '@material-ui/icons/AirplaySharp';
// import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyPlayer from 'react-spotify-player';

// const Controls = () =>{
//     return(
//         <div className="controls">
//             <div className="controls-left">
//                 <img src="https://i.scdn.co/image/ab67616d00001e0222b2a5403f63171dc5b78e55" alt="" />
//                 <div className="name">
//                     <p>Better</p>
//                     <p>Ananya Birla</p>
//                 </div>
//                 <FavoriteBorderIcon />
//                 <AirplaySharpIcon />
//             </div>
//             <div className="middle">
//                 <h2>middle</h2>
//             </div>
//             <div className="controls-right">
//                 <h2>right</h2>
//             </div>
//         </div>
//     )
// }
// const Controls = () =>{
//     const token = Cookies.get('spotifyAuthToken')
//     return(
//         <div className="controls">
//             <SpotifyPlayer
//             autoPlay={"true"}
//             initialVolume={1}
//             magnifySliderOnHover={"true"}
//             name={"Player"}
//             offset={1}
//             token={token}
//             uris={['spotify:track:6rqhFgbbKwnb9MLmUQDhG6']}
//             styles={{
//                 activeColor: 'white',
//                 fontColor:"white",
//                 bgColor: '#333',
//                 color: 'white',
//                 loaderColor: 'white',
//                 sliderColor: 'white',
//                 trackArtistColor: 'white',
//                 trackNameColor: 'white',
//             }}
//             />
//         </div>
//     )
// }
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