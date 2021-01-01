import React from "react"
import "./Login.css"
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
import { SpotifyAuth, Scopes, SpotifyAuthListener } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import Dashboard from "./Dashboard.js"
 
const Login = () => {
    const token = Cookies.get('spotifyAuthToken')
    return (
        <div className="login">
        {token ? (
        <SpotifyApiContext.Provider value={token}>
            <Dashboard />
          {/* <p>You are authorized with token: {token}</p> */}
        {console.log(Scopes.appRemoteControl)}
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <div>
        <img className="spotify-login" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback'
          clientID='101fd564e66f4471b2f1145a9f0b89f4'
          scopes={[Scopes.userReadPrivate
          ,"user-read-email","streaming"
          ,"user-read-email"
          ,"user-read-private"
          ,"user-read-playback-state"
          ,"user-modify-playback-state"]}
          onAccessToken={(token)=>{console.log(token)}}
        />
        <SpotifyAuthListener />
        </div>
      )}
    </div>
    )
}
export default Login;