import React, {PropTypes} from 'react';

const propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  onCommentSubmit: PropTypes.func
};

const defaultProps = {
  author: '',
  text: '',
};
class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { author: '', text: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.author || !this.state.text) { return; }
    this.props.onCommentSubmit({ author: this.state.author, text: this.state.text });
    this.setState({ author: this.state.author.trim() });
    this.setState({ text: this.props.text });
  }
  
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name.." value={this.state.author} onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Your comment.." value={this.state.text} onChange={this.handleTextChange} />
        <button type="submit" value="submit" />
      </form>
    );
  }
}

CommentForm.propTypes = propTypes;
CommentForm.defaultProps = defaultProps;

export default CommentForm;

