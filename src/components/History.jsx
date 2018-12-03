import React from 'react';

class History extends React.Component {


    constructor(props) {
        super(props); // React.Component.constructor(props)

    }

    render() {

        let contentText = '<b>quia</b> et suscipit\nsuscipit <strong>recusandae consequuntur expedita et cum</strong>\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';

        return (
            <div>
                <p dangerouslySetInnerHTML={{__html: contentText}} />
                <p>{contentText}</p>

                {this.props.children}
            </div>
        );
    }

}

export {History};