﻿import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer as router, RouterState } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore, Dispatch } from 'redux';
import thunk from './node_modules/redux-thunk/es/index';

import * as UserActions from './Actions/UserCenter';
import * as ErrorActions from './Actions/Error';
import * as MessageActions from './Actions/Message';
import error, { ErrorStore } from './Reducers/Error';
import post, { TopicState } from './Reducers/Post';
import userInfo, { UserInfoStore } from './Reducers/UserInfo';
import message, { MessageInfo } from './Reducers/Message';
declare module "redux" {
    export interface Dispatch<S> {
        <R, E>(asyncAction: ThunkAction<R, S, E>): R;
    }
}

/**
 * thunk-action的类型定义
 */
export type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R;

/**
 * 全局store的类型定义
 */
export interface RootState {
    error: ErrorStore;
    post: TopicState;
    userInfo: UserInfoStore;
    message: MessageInfo;
    router: RouterState;
}


export const Actions = { ...UserActions, ...ErrorActions, ...MessageActions };
type actionTypes = keyof typeof Actions

/**
 * 全部Action的类型定义
 */
export type RootAction = ReturnType<typeof Actions[actionTypes]>; 

/**
 * 合并reducer
 */
const reducer = combineReducers<RootState>({
    error,
    post,
    router,
    userInfo,
    message,
});

export const history = createHistory();

/**
 * 连接到redux开发者工具
 */
const composeEnhancers: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));
