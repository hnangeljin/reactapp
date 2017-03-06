import constants from '../constants';

var initialState = {
  list: []
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.POST_RECIEVED:
      console.log('POST_RECIEVED: '+JSON.stringify(action.posts));


      updated.list = action.posts;
      console.log(updated['list']);


      return updated;
    default:
      return updated;

  }
}
