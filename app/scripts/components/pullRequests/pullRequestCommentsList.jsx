import React from 'react';
import Comment from './comment.jsx';

class PullRequestCommentsList extends React.Component {

  constructor(props){
    super(props);
    this.state = { comments: [] }
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    this.props.githubService.getIssueComments(
      this.props.data.organization,
      this.props.data.repo,
      this.props.data.issueNumber,
      function(response) {
        console.log(response)
        this.setState({ comments: response })
      }.bind(this)
    )
  }

  render() {
    return (
      <div className="comments-container">
        { this.state.comments.map(function(comment) {
          return <Comment key={comment.id} comment={ comment }/>;
        }.bind(this))}
      </div>
    )
  }

}

export default PullRequestCommentsList;
