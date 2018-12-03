import React from 'react';
import ReactDOM from 'react-dom';

import SimpleFluxApp from '../components/SimpleFluxApp';

const title = 'Simple Flux App';

ReactDOM.render(
    <SimpleFluxApp title={title} name="main-app" />,
    document.getElementById('app')
);

