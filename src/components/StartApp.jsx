import React from 'react';

import {History} from './History';

class StartApp extends React.Component {

    static displayName: 'Main App'

    static defaultProps: {
        status: 'default',
        name: 'default',
    }

    propTypes: {
        updateProps: React.PropTypes.funct.isRequired,
        status: React.PropTypes.string
    }


    /**
     * Mounting
     * These methods are called when an instance of a component is being created and inserted into the DOM:
     * - constructor()
     * - componentWillMount()
     * - render()
     * - componentDidMount()
     * */

    constructor(props) {
        super(props); // React.Component.constructor(props)

        this.state = {
            status: 'init',
            name: this.props.name,
            date: new Date()
        };

        this.generateStatus = this.generateStatus.bind(this);
        console.log('constructor');
    }

    componentWillMount() {
        /**
         * - this.setState() - setting state synchronously in this method will not trigger a re-rendering
         * - This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor() instead.
         * */

        this.setState({
            status: 'ready to mount'
        });
        console.log('componentWillMount');
    }

    componentDidMount() {
        /**
         * - If you need to load data from a remote endpoint, this is a good place to instantiate the network request
         * - Setting state in this method will trigger a re-rendering.
         * */

        this.setState({
            data: []
        });
        console.log('componentDidMount');

    }


    /**
     * Updating
     * An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:
     *
     * - componentWillReceiveProps()
     * - shouldComponentUpdate()
     * - componentWillUpdate()
     * - render()
     * - componentDidUpdate()
     * */

    componentWillReceiveProps(nextProps) {
        /**
         * - state can be updated via this.setState()
         * */
        console.log(this.props);
        console.log(nextProps);
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * @dafault return true
         * - return false doesn't invoke other methods such as componentWillUpdate(), render(), and componentDidUpdate()
         * */
        console.log('shouldComponentUpdate');


        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        /**
         * don't this.setState()
         * - If you need to update state in response to a prop change, use componentWillReceiveProps() instead
         * */
        /*this.props = nextProps;
        this.state = nextState;*/
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        /**
         * - Use this as an opportunity to operate on the DOM when the component has been updated.
         * - This is also a good place to do network requests as long as you compare the current props to previous props
         * (e.g. a network request may not be necessary if the props have not changed).
         * */
        console.log('componentDidUpdate');
    }


    /**
     * Deleting Component
     *
     * */

    componentWillUnmount() {

    }

    generateStatus(e) {
        let status = '',
            dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for(let i = 0; i < 6; i++ ) {
            status += dictionary.charAt(Math.floor(Math.random() * dictionary.length))
        }

        /*(ars) => {
            console.log(ars);
        };*/
        this.setState({
            status: status
        });

    }

    getClassForStatus() {
        let classNames = 'component-status';
        if(this.state.status === 'init') {
            classNames += ' component-status-main';
        }
        return classNames;
    }

    render() {
        console.log('render');
        let fruit = this.props.fruit || 'apple';
        let classNames = this.getClassForStatus();

        return (
            <div>
                <h1>{this.props.title}</h1>
                <span>{fruit}</span>
                <div className={classNames}>
                    <span>{this.state['status']}</span>
                    <div>
                        <button id="generate-status" onClick={this.generateStatus}>Generate Status</button>
                        <button id="update-props" onClick={this.props.updateProps}>Update Props</button>
                    </div>

                </div>

                <History/>

                <History>
                    <div>some text #1</div>
                    <div>some text #2</div>
                    <div>some text #3</div>
                </History>
            </div>);
    }

}

export default  StartApp;