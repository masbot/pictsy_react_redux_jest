import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/comments';
import { Provider } from 'react-redux';
import App from './components/App';

render(
    <Provider store={createStore(rootReducer)}>
        <App/>
    </Provider>
    , document.getElementById('root'));