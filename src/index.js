import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';



import App from './App'

import './index.css';

import movieReducer from './reducers/movieReducer';
import MovieList from './components/MovieList';

const store = createStore(movieReducer)
console.log()

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
        <MovieList />
    </Router>
  </Provider>,
  document.getElementById('root')
);
