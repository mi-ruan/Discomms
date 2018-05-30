import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const currentUser = window.currentUser;
  if (currentUser) {
    const {id, username} = currentUser;
    const preloadedState = {
      session: {id},
      entities: {
        users: {[id]: currentUser}
      }
    };
  };
  store = configureStore(preloadedState);
  window.currentUser = null;
} else {
  store = configureStore();
}
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
