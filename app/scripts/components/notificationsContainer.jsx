import React from 'react';
import NotificationElement from './notificationElement.jsx';

class NotificationsContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = { notifications: [] };
  }

  filterOpenNotifications(notifications) {
    return notifications.filter(function(element) {
      return element.state == "open" && element.pull_request;
    })
  }

  componentWillMount() {
    this.props.githubService.getOrganizationIssues(function(notifications) {
      this.setState({ notifications: this.filterOpenNotifications(notifications) });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1> Assigned Pull Requests </h1>
        <ul id="notifications-list">
          { this.state.notifications.map(function(notification) {
            return <NotificationElement key={notification.id} notification={ notification }/>;
          })}
        </ul>
      </div>
    );
  }

}

NotificationsContainer.propTypes = {
  items : React.PropTypes.array
}

export default NotificationsContainer;
