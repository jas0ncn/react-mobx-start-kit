import * as React from 'react';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router';
import { AppStore, RouterStore } from './stores';
import { STORE_APP, STORE_ROUTER } from './constants/stores';
import { Container } from './containers/Container';

// import css
require('./styles/global.less');

// enable MobX strict mode
useStrict(true);

// prepare MobX stores
const history = createBrowserHistory();
const appStore = new AppStore();
const routerStore = new RouterStore(history);
const rootStores = {
  [STORE_APP]: appStore,
  [STORE_ROUTER]: routerStore
};

export default <Provider {...rootStores} >
    <Router history={history} >
        <Route path="/" component={Container} />
    </Router>
</Provider >;
