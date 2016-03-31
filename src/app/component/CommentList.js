import React, { PropTypes } from 'react';
import Comment from './Comment';

const propTypes = {
  data: PropTypes.array,
};

function CommentList(props) {
  let comments = props.data.map((comment) =>
    (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    )
  );
  
  return (
    <div className="commentList">
      {comments}
    </div>
  );
}

CommentList.propTypes = propTypes;

export default CommentList;
