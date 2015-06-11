import React from 'react';
import NotificationsContainer from '../components/notificationsContainer.jsx';
import PullRequestInformation from '../components/pullRequestInformation.jsx';
import GithuService from '../services/githubService.js'

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false,
      selectedPullRequest: {},
      githubService: new GithuService()
    };
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  pullRequestSelected(pullRequestData) {
    this.setState({ selectedPullRequest: pullRequestData })
  }

  render() {
    return (
      <div>
        <div className="notifications-container">
          <NotificationsContainer onPullRequestSelected={ this.pullRequestSelected.bind(this) } githubService={ this.state.githubService } />
        </div>
        <div className="pull-request-container">
          <PullRequestInformation pullRequestInformation={ this.state.selectedPullRequest } githubService={ this.state.githubService }/>
        </div>
      </div>
    );
  }
}

export default Home;
