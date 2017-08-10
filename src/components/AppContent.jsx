'use strict';
import React from 'react';

class AppContent extends React.Component {


    constructor(props) {
        super(props); // React.Component.constructor(props)

    }

    render() {

        let contentText = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';

        return (
            <div>
                <p dangerouslySetInnerHTML={{__html: contentText}} />
            </div>);
    }

}

export {AppContent};
