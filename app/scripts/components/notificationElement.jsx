import React from 'react';

class NotificationElement extends React.Component {

  constructor(props){
    super(props);
  }

  getOrganization() {
    var owner = this.props.notification.repository.owner;
    if (owner.type == 'Organization') {
      return owner.login;
    } else {
      return '';
    }
  }

  getRepoName() {
    return this.props.notification.repository.name;
  }

  getPullRequestNumber() {
    var splitted = this.props.notification.pull_request.url.split('/');
    return splitted[splitted.length - 1];
  }

  getIssueNumber() {
    var splitted = this.props.notification.comments_url.split('/');
    return splitted[splitted.length - 2];
  }

  handleClick() {
    this.props.onPullRequestSelected({
      organization: this.getOrganization(),
      repo: this.getRepoName(),
      pullRequestNumber: this.getPullRequestNumber(),
      issueNumber: this.getIssueNumber()
    })
  }

  render() {
    return (
      <li className="notification" onClick={ this.handleClick.bind(this) }>
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
