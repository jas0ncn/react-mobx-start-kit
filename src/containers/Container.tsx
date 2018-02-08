import * as React from 'react';
import * as CssModules from 'react-css-modules';
import { RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
import { AppStore, RouterStore } from '../stores';
import { STORE_APP, STORE_ROUTER } from '../constants/stores';

// import css
const styles = require('./styles.less');

export interface AppContainersProps extends RouteComponentProps <any> {
    /** MobX Stores will be injected via @inject() **/
    [STORE_ROUTER]: RouterStore;
    [STORE_APP]: AppStore;
}

@inject(STORE_APP, STORE_ROUTER)
@CssModules(styles)
@observer
export class Container extends React.Component <AppContainersProps, {}> {

    componentWillMount () {
        console.log(this.props);
    }

    render() {
        return <div styleName="container">Hello World!!</div>;
    }
}
