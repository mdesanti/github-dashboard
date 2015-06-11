import React from 'react';
import NotificationsList from './notificationsList.jsx';

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

  getIssues(filter, cb) {
    this.props.githubService.getOrganizationIssues(filter, cb);
  }

  getAllIssues() {
    this.getIssues('assigned', function(notifications) {
      this.setState({ notifications: this.filterOpenNotifications(notifications) });
    }.bind(this));

    this.getIssues('mentioned', function(notifications) {
      this.setState({ mentioned: this.filterOpenNotifications(notifications) });
    }.bind(this));

    setTimeout(function() { this.getAllIssues() }.bind(this), 60000);
  }

  componentWillMount() {
    this.getAllIssues();
  }

  render() {
    return (
      <div>
        <h3> Assigned </h3>
        <NotificationsList onPullRequestSelected={ this.props.onPullRequestSelected } notifications={ this.state.notifications }/>
        <h3> Mentioned </h3>
        <NotificationsList onPullRequestSelected={ this.props.onPullRequestSelected } notifications={ this.state.mentioned }/>
      </div>
    );
  }

}

NotificationsContainer.propTypes = {
  items : React.PropTypes.array
}

export default NotificationsContainer;
