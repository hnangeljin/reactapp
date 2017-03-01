import React, { Component } from 'react';
import { APIManager } from '../../utils';

class Posts extends Component {

  componentDidMount(){
    APIManager
    .get('/api/profile', null)
    .then(response=>{
      console.log('response: '+JSON.stringify(response));
    })
    .catch(err=>{
      console.log('ERROR: '+err);
    })
  }

  render(){
    return (
      <div>
        Post Container
      </div>
    );
  }
}

export default Posts;
