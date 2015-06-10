import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx'
import Home from './home.jsx'
import Login from './login.jsx'

class App extends React.Component {

  componentWillMount() {
    this.lock = new Auth0Lock('h9TJPF4YxrauUSFSmAmwxO2Pvj8TVzF3', 'internal-wolox.auth0.com');
    this.getIdToken();
  }

  getIdToken() {
    var idToken = localStorage.getItem('userToken');
    var accessToken = localStorage.getItem('accessToken');
    var authHash = this.lock.parseHash(window.location.hash);
    if ((!idToken && authHash) || (!accessToken && authHash)) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        this.lock.getProfile(authHash.id_token, function(err, profile) {
          if (!err) {
            accessToken = profile.identities[0].access_token;
            localStorage.setItem('accessToken', accessToken);
            this.setState({ idToken: idToken, accessToken: accessToken });
          }
        }.bind(this));
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
        return;
      }
    }
    this.setState({ idToken: idToken, accessToken: accessToken });
  }

  render() {
    var content = (this.state.idToken && this.state.accessToken) ? <RouteHandler /> : <Login lock={this.lock} />
    return (
      <div>
        <Header lock={this.lock} />
        <div className="content">
          { content }
        </div>
      </div>
    );
  }

}

export default App;
