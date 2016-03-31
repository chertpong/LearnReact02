import React, { PropTypes } from 'react';
import marked from 'marked';

const propTypes = {
  author: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  author: '',
};

export default class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
  }

  rawMarkup() {
    return { __html: marked(this.props.children.toString(), { sanitize: true }) };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
      </div>
    );
  }

}

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
