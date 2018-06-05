import React from 'react'
import BaseLayout from './BaseLayout'

/* begin Redux Configuration */
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reducers from './../store/Reducers'

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(Reducers, composeEnhancers(
  applyMiddleware(thunk),
));
/* end Redux Configuration */

export default class Layout extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BaseLayout children={this.props.children} />
      </Provider>
    )
  }
}


