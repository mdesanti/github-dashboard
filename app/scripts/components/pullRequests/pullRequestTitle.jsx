import React from 'react';

class PullRequestTitle extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="pull-request-title-container">
        <div className="icons">
          <div className="octicon octicon-git-pull-request open icon"/>
          <span> Open </span>
        </div>
        <span className="title">{ this.props.data.title }</span>
        <span className="number"> #{ this.props.data.number } </span>
      </div>
    )
  }

}

export default PullRequestTitle;
