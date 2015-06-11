import React from 'react';

var marked = require('marked');

class Comment extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var rawMarkup = marked(this.props.comment.body, {sanitize: true});
    return (
      <div className="comment">
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    )
  }

}

export default Comment;
