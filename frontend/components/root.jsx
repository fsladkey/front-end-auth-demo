import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { getCurrentUser } from '../actions/session_actions';
import App from './app';
import Feed from './feed';
import configureStore from '../store';
import SignInForm from './sign_in_form';
import SignUpForm from './sign_up_form';

export default function Root() {
  const preloadedState = window.currentUser ?
    { session: { currentUser: window.currentUser, errors: {} } } :
    {};

  delete window.currentUser
  const store = configureStore(preloadedState)
  // const store = configureStore()
  // let fetched = false

  function fetchCurrentUser(nextState, replace, next) {
    next()
    // if (!fetched) {
    //   fetched = true;
    //   store.dispatch(getCurrentUser()).then(() => next());
    // }
  }

  function redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser)
      replace('/');
  }

  function redirectUnlessLoggedIn(nextState, replace) {
    if (!store.getState().session.currentUser)
      replace('/session/new');
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={ fetchCurrentUser }>
          <IndexRoute component={ Feed } onEnter={ redirectUnlessLoggedIn }/>
          <Route
            path="session/new"
            component={ SignInForm }
            onEnter={ redirectIfLoggedIn }
            />
          <Route
            path="users/new"
            component={ SignUpForm }
            onEnter={ redirectIfLoggedIn }
            />
        </Route>
      </Router>
    </Provider>
  );
}
