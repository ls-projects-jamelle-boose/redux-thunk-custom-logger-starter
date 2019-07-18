import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import NASAPhoto from './components/NASAPhoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <NASAPhoto />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
