import React from 'react';
import ReactDom from 'react-dom';
import { API_URL } from './config';

import CommentBox from './component/CommentBox';

ReactDom.render(<CommentBox url={API_URL} pollInterval={2000} />, document.querySelector('#app'));
