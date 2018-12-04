'use strict';
import React from 'react';


import {AppContent} from './AppContent';

export default class App extends React.Component {

    static displayName = 'Main App'

    static defaultProps = {
        status: 'default',
        name: 'default',
    }

    propTypes = {
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

        this.componentWillMount = this.componentWillMount.bind(this);
        this.generateStatus = this.generateStatus.bind(this);
    }

    componentWillMount() {
        /**
         * - this.setState() - setting state synchronously in this method will not trigger a re-rendering
         * - This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor() instead.
         * */

        /*this.setState({
            status: 'ready to mount'
        });*/
    }

    componentDidMount() {
        /**
         * - If you need to load data from a remote endpoint, this is a good place to instantiate the network request
         * - Setting state in this method will trigger a re-rendering.
         * */


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
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * @dafault return true
         * - return false doesn't invoke other methods such as componentWillUpdate(), render(), and componentDidUpdate()
         * */
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        /**
         * don't this.setState()
         * - If you need to update state in response to a prop change, use componentWillReceiveProps() instead
         * */
    }

    componentDidUpdate(prevProps, prevState) {
        /**
         * - Use this as an opportunity to operate on the DOM when the component has been updated.
         * - This is also a good place to do network requests as long as you compare the current props to previous props
         * (e.g. a network request may not be necessary if the props have not changed).
         * */
    }

    componentWillUnmount() {

    }

    generateStatus(e) {
        let status = '',
        dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for(let i = 0; i < 6; i++ ) {
            status += dictionary.charAt(Math.floor(Math.random() * dictionary.length))
        }

        (ars) => {
            console.log(ars);
        };
        this.setState({
            status: status
        })

    }

    getClassForStatus() {
        let classNames = 'component-status';
        if(this.state.status === 'init') {
            classNames += ' component-status-main';
        }
        return classNames;
    }

    render() {

        let fruit = 'apple';
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

                    <AppContent />

                </div>
            </div>);
    }

}
