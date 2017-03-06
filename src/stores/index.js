import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from '../reducers';

var store;

// export default {
//
//   configureStore: () => {
//     const reducers = combineReducers({
//       post: postReducer
//     });
//     store = createStore(
//       reducers,
//       applyMiddleware(thunk)
//     )
//     return store
//   },
//   currentStore: () => {
//     return store
//   }
//
// }


var store;//for if the server is running
const initialState = {

};

export default {

  configureStore: (initial) => {
    const reducers = combineReducers({
      post: postReducer
    });
    store = createStore(
      reducers,
      initial,
      applyMiddleware(thunk)
    )
    return store
  },
  currentStore: () => {
    return store
  }

}
