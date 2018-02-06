import _ from 'lodash';
import React, { Component} from 'react';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
          //lifecycle method
          componentDidMount(){
                    this.props.fetchPosts();
          }

          renderPosts(){
                    return _.map(this.props.posts, post=>{
                              return(
                                        <li className='list-group-item' key='post.id'>
                                                  {post.title}
                                        </li>
                              );
                    });
          }

          render(){

                    return(
                              <div>
                                        <div className='text-xs-right'>
                                                  <Link className='btn btn-primary' to='/posts/new'>
                                                            Add a Post
                                                  </Link>
                                        </div>
                                        <h3>Posts</h3>
                                        <ul className='list-group'>
                                                  {this.renderPosts()}
                                        </ul>
                              </div>
                    );
          }
}

function mapStateToProps(state){
          return { posts : state.posts };
}

//identical map dispatch to props ; call as a separate function if computation is necessary
export default connect (null, {fetchPosts}) (PostsIndex);