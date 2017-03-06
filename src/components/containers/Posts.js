import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

class Posts extends Component {

  componentDidMount(){
    this.props.fetchPosts(null);
    // APIManager
    // .get('/api/profile', null)
    // .then(response=>{
    //   console.log('response: '+JSON.stringify(response));
    // })
    // .catch(err=>{
    //   console.log('ERROR: '+err);
    // })
  }

  render(){
    console.log(this.props);
    const list = this.props.posts.list.map((post, i) => {
      return (
        <li key = {post.id}>{post.caption}</li>
      )
    })
    return (
      <div>
        Post Container
        <ol>
          {list}
        </ol>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    posts: state.post
  }
}

const disptchToProps = (dispatch) => {
  return {
    fetchPosts: (params) => dispatch(actions.fetchPosts(params))
  }
}

export default connect(stateToProps, disptchToProps)(Posts);
