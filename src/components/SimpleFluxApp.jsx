import React, {Component} from 'react';
import {Container, ReduceStore} from 'flux/utils';
import {Dispatcher} from 'flux';


const someData = {
    name: 'My First App',
    description: 'Description for the First Flux + React application'
};

/**
 * Dispatcher
 * */
class AppDispatcherClass extends Dispatcher {}
const dispatcher = new AppDispatcherClass();

/**
 * Actions
 * */

class Actions {
    constructor(props) {

    }
    loadDataToStore() {
        dispatcher.dispatch({
            type: 'loadDataToStore',
            data: someData
        });
    }
}

const actions = new Actions();

/**
 * Stores
 * */

class MainStore extends ReduceStore {

    constructor() {
        super(dispatcher);
        // this._state = [1,2,3,4];
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {
        switch (action.type) {
            case 'loadDataToStore':
                return action.data;

            default:
                return state;
        }
    }
}

class SlaveStore extends ReduceStore {

    constructor() {
        super(dispatcher);
        this._state = {
            empty: true
        };
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {
        switch (action.type) {
            case 'loadDataToStore':
                return action.data;

            default:
                return state;
        }
    }
}

const mainStore = new MainStore();
const slaveStore = new SlaveStore();

/**
 * Main Container
 *
 * */
class MainComponentContainer extends Component {

    static getStores() {
        return [mainStore];
    }

    static calculateState(prevState) {
        //this.state

        return {
            data: mainStore.getState()
        };
    }

    render() {
        return (
            <div className='main-component-container'>
                <MainView {...this.state} title={this.props.title}/>
            </div>
        );
    }
}

const container = Container.create(MainComponentContainer);
export default container;


/**
 * React Components - aka Views
 * */
class MainView extends Component {

    componentDidMount() {

        actions.loadDataToStore();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    loadData(e) {
        actions.loadDataToStore();
    }

    render() {

        return(
            <div className='main-view'>
                <h1>{this.props.title}</h1>
                <div className='loading'>{this.props.data.name ? '' : 'Data is Loading...'}</div>
                <button type='button' onClick={this.loadData}>Load Data</button>
                <div className='main-view-data-container'>
                    <div className='main-view-name'>{this.props.data.name}</div>
                    <div className='main-view-description'>{this.props.data.description}</div>
                </div>
            </div>
        );
    }
}