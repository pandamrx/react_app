import React from 'react';

import StartApp from './StartApp';

export default class ExtendedStartApp extends React.Component {

    displayName: 'Main App'

    render() {
        let title = this.props.title + ' Extended';
        return (
            <div className='extended-start-app'>
                <StartApp {...this.props} title={title}/>
            </div>
        );
    }

}