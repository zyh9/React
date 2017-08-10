import React from 'react';
import ReactDOM from 'react-dom';
// import Ul from './comm/Ul'
// ReactDOM.render(<Ul />, document.getElementById('root'));

// import Todo from './comm/todo'
// ReactDOM.render(<Todo />, document.getElementById('root'));

import Ctop from './comm/Ctop'
ReactDOM.render(<Ctop />, document.getElementById('root'));


if(module.hot){
    module.hot.accept();
}
