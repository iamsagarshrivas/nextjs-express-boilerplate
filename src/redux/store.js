import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import axios from '../utils/axios';
import reducers from './reducers';


const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
  );

export default store;
