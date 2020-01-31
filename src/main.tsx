import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SwitchRoutes } from './core';
import { OrganizationScene, UserProfileScene } from './scenes';
import { rootCss, bodyCss } from './masterStyles';
import { createStore, combineReducers } from 'redux';
import { UserProfileState, userProfileReducer } from './pods/user-profile';
import { OrganizationState, organizationReducer } from './pods/organization';
import { Provider } from 'react-redux';

// reset styles
let body = document.getElementsByTagName('body')[0];
let root = document.getElementById('root');

Object.assign(body.style, bodyCss);
Object.assign(root.style, rootCss);

export interface State {
    userProfileState: UserProfileState;
    organizationState: OrganizationState
}

export const reducers = combineReducers<State>({
    userProfileState: userProfileReducer,
    organizationState: organizationReducer
});


const store = createStore(
    reducers,
    window["__REDUX_DEVTOOLS_EXTENSION__"] &&
    window["__REDUX_DEVTOOLS_EXTENSION__"]()
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact={true} path={SwitchRoutes.root} component={OrganizationScene}></Route>
                <Route exact={true} path={SwitchRoutes.userProfile} component={UserProfileScene}></Route>
            </Switch>
        </HashRouter>
    </Provider>
    , root);
