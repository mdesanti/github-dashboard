import React from 'react';
import NotificationElement from './notificationElement.jsx';

class NotificationsContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = { notifications: [], mentioned: [] };
  }

  filterOpenNotifications(notifications) {
    return notifications.filter(function(element) {
      return element.state == "open" && element.pull_request;
    })
  }

  componentWillMount() {
    this.props.githubService.getOrganizationIssues('assigned', function(notifications) {
      this.setState({ notifications: this.filterOpenNotifications(notifications) });
    }.bind(this));

    this.props.githubService.getOrganizationIssues('mentioned', function(notifications) {
      this.setState({ mentioned: this.filterOpenNotifications(notifications) });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1> Pull Requests </h1>
        <h3> Assigned </h3>
        <ul id="notifications-list">
          { this.state.notifications.map(function(notification) {
            return <NotificationElement key={notification.id} notification={ notification }/>;
          })}
        </ul>
        <h3> Mentioned </h3>
        <ul id="notifications-list">
          { this.state.mentioned.map(function(notification) {
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
