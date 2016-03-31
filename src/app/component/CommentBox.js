import React, { PropTypes } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Axios from 'axios';

const propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number,
};

const defaultProps = {
  url: 'localhost',
  pollInterval: 5000,
};

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  loadCommentsFromServer() {
    Axios
      .get(`${this.props.url}/api/comments`)
      .then(response => { this.setState({ data: response.data }); })
      .catch(err => console.error(err));
  }
  
  handleCommentSubmit(comment) {
    Axios
      .post(`${this.props.url}/api/comments`, comment)
      .then(response => { this.setState({ data: response.data }); })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={ this.state.data } />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }

}

CommentBox.propTypes = propTypes;
CommentBox.defaultProps = defaultProps;
export default CommentBox;
