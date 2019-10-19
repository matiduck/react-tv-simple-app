import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { PreferencesContext } from './context/PreferencesContext'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './store/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware'
import { fetchBookmarks } from './store/actions/bookmarks.actions'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware)),
)

store.dispatch(fetchBookmarks())

/* or <HashRouter> */

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PreferencesContext.Provider
        value={{
          initialQuery: 'batman',
          resultsPerPage: 6,
        }}
      >
        <App />
      </PreferencesContext.Provider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
