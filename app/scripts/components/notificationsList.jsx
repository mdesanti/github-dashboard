import React from 'react';
import NotificationElement from './notificationElement.jsx';

class NotificationsList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul id="notifications-list">
        { this.props.notifications.map(function(notification) {
          return <NotificationElement onPullRequestSelected={ this.props.onPullRequestSelected } key={notification.id} notification={ notification }/>;
        }.bind(this))}
      </ul>
    );
  }

}

export default NotificationsList;
