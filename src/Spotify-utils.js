import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css' // if using the included styles
 
const Auth = () => {
  <SpotifyAuth
    redirectUri='http://localhost:3000/callback'
    clientID='101fd564e66f4471b2f1145a9f0b89f4'
    scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
  />
}
export default Auth;