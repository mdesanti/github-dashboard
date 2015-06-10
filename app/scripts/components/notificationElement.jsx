import React from 'react';

class NotificationElement extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <li className="notification">
        <div className="icon-container">
          <div className="octicon octicon-git-pull-request merged icon"/>
        </div>
        <div className="notification-content">
          <div className="pr-name">
            { this.props.notification.title}
          </div>
          <div className="repo">
            { this.props.notification.repository.name}
          </div>
        </div>
      </li>
    );
  }

}

export default NotificationElement;
