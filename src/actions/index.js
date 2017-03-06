import constants from '../constants';
import { APIManager } from '../utils';

export default {
  fetchPosts: (params) => {
    return (dispatch) => {

      APIManager
      .get('/api/post', null)
      .then(response=>{
        console.log('response: '+JSON.stringify(response));
        dispatch({
          type: constants.POST_RECIEVED,
          posts: response.results
        })
      })
      .catch(err=>{
        console.log('ERROR: '+err);
      })

    }
  },
  postRecieved: (post) => {
    return {
      type: constants.POST_RECIEVED,
      posts: post
    }
  }

}
