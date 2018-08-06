import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyArZUT5iRSnO4W7cpWa4HlC_5ySw2MLW1c",
            authDomain: "avalove-193d6.firebaseapp.com",
            databaseURL: "https://avalove-193d6.firebaseio.com",
            projectId: "avalove-193d6",
            storageBucket: "avalove-193d6.appspot.com",
            messagingSenderId: "247048910808"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
