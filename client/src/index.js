import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './components/App';
import reducers from './reducers';

const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
        // other store enhancers if any
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
