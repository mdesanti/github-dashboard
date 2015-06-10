import React from 'react';

class Login extends React.Component {

  componentWillMount() {
  }

  showLock() {
    this.props.lock.show();
  }

  render() {
    return (
    <div className="login-box">
      <a onClick={this.showLock.bind(this)}>Sign In</a>
    </div>);
  }
}

export default Login;
