import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from '../utils/axios';
import reducers from './reducers';

export default req => {

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axios))
  );

  return store;
};
