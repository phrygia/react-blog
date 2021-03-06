# react-blog (client)

## π  μ¬μ©κΈ°μ 

- React (CRA)
- μ€νμΌλ§ : material-ui + styled-components
- μνκ΄λ¦¬ : redux + redux-saga

## π¨ Redux, Redux-saga

```js
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const middlewares = [sagaMiddleware, routerMiddleware(history)]
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancer = process.env.NODE_ENV === 'production' ? compose : devtools || compose

const store = createStore(createRootReducer(history), initialState, composeEnhancer(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)

export default store

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MyRouter />
      </ConnectedRouter>
    </Provider>
  )
}
```

## β Structure

```
src
βββ assets
βββββββ css
βββββββ img
βββββββ style
βββ components
βββββββ auth
βββββββ comments
βββββββ editor
βββββββ post
βββββββ search
βββββββ AdminInfo.js
βββββββ Footer.js
βββββββ Header.js
βββββββ Member.js
βββββββ Spinner.js
βββ redux
βββββββ reducers
βββββββ sagas
βββββββ types.js
βββ routes
βββββββ normalRoute
βββββββ protectedRoute
βββββββ Router.js
βββ App.js
βββ index.js
βββ store.js
```

## π¦ Packages

### Main

- [create-react-app](https://github.com/facebook/create-react-app)
- [react 16.0.1](https://github.com/facebook/react)
- [react-router 5.2.0](https://github.com/remix-run/react-router)

### styling

- [material UI](https://github.com/mui-org/material-ui)
- [styled-components](https://github.com/styled-components/styled-components)

### Development Setting

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier))

> [More Details](https://github.com/phrygia/react-blog/blob/master/client/package.json)

<div align="center">
<sub><sup>Project by <a href="https://github.com/phrygia">phrygia</a></sup></sub><small></small>
</div>
