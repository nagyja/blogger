import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component {
  render(){ return <div>Hello!</div>}
}

class GoodBye extends React.Component {
  render(){ return <div>GoodBye!</div>}
}

//<Route path="/posts/:id" component={PostsShow}/> 
        //<Route path="/posts/new" component={PostsNew}/>

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/" component={PostsIndex}/>
        </Switch>
        <Route path="/hello" component={Hello}/>
        <Route path="/goodbye" component={GoodBye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

