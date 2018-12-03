import React from 'react';
import ReactDOM from 'react-dom';

import ExtendedStartApp from '../components/ExtendedStartApp';

let title = 'Simple React App';
function updateProps(e) {
    title = 'Props Updated!';
}

ReactDOM.render(
    <ExtendedStartApp title={title} name="main-app" updateProps={updateProps} />,
    document.getElementById('app')
);

