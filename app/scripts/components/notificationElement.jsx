import React from 'react';

class NotificationElement extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <li className="notification">
        <div className="icon-container">
          <div className="octicon octicon-git-pull-request open icon"/>
        </div>
        <div className="notification-content">
          <div className="pr-name">
            <a href={this.props.notification.pull_request.html_url} target="_blank">
              { this.props.notification.title}
            </a>
          </div>
          <div className="repo">
            { this.props.notification.repository.name}
          </div>
        </div>
        <div className="view-detail-button">
          <span className="octicon octicon-chevron-right"></span>
        </div>
      </li>
    );
  }

}

export default NotificationElement;
