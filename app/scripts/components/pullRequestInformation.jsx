import React from 'react';
import PullRequestTitle from './pullRequests/pullRequestTitle.jsx';

class PullRequestInformation extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pullRequestData: undefined,
      loading: false
    }
  }

  componentWillReceiveProps(nextProps) {
    var prInfo = nextProps.pullRequestInformation;
    this.setState({ loading: true });
    console.log('a')
    this.props.githubService.getIssueComments(prInfo.organization, prInfo.repo, prInfo.pullRequestNumber, function(response) { console.log(response) })
    this.props.githubService.getPullRequestData(
      prInfo.organization,
      prInfo.repo,
      prInfo.pullRequestNumber,
      function(response) {
        console.log(response);
        this.setState({ pullRequestData: response, loading: false });
      }.bind(this)
    )
  }

  render() {
    if (this.state.loading) {
      return ( <image className="loading" src="images/loading.svg"/> );
    } else if (this.state.pullRequestData == undefined) {
      return <div/>;
    } else {
      return (
        <div className="pull-request">
          <PullRequestTitle data={ this.state.pullRequestData }/>
        </div>
      )
    }
  }

}

export default PullRequestInformation;
