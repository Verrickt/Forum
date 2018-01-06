import { createAction } from 'typesafe-actions';
import * as ActionTypes from '../ActionTypes';
import * as Appstate from '../States/AppState';

export const userLogIn = createAction(ActionTypes.USER_LOG_ON);

export const userLogOff = createAction(ActionTypes.USER_LOG_OFF);

export const usercenterPageLoadUnfinish = createAction(ActionTypes.USER_CENTER_PAGE_LOAD_UNFINISH);

export const usercenterPageLoadFinish = createAction(ActionTypes.USER_CENTER_PAGE_LOAD_FINISH, (totalPage: number) => ({
    type: ActionTypes.USER_CENTER_PAGE_LOAD_FINISH,
    totalPage
}));

export const userNotFound = createAction(ActionTypes.USER_NOT_FOUND);

export const userCenterLoading = createAction(ActionTypes.USER_CENTER_LOADING);

export const userCenterLoaded = createAction(ActionTypes.USER_CENTER_LOADED);

export const userCenterSolveError = createAction(ActionTypes.USER_CENTER_SOLVE_ERROR);

export const changeUserInfo = createAction(ActionTypes.CHANGE_USERINFO, (newInfo: Appstate.UserInfo ) => ({
    type: ActionTypes.CHANGE_USERINFO,
    newInfo
}));

export const changeCurrentVisitingUserPage = createAction(ActionTypes.CHANGE_VISITING_USER, (page: 'exact' | 'manage' = 'exact', id: number) => ({
    type: ActionTypes.CHANGE_VISITING_USER,
    page,
    id
}));

export const userCenterError = createAction(ActionTypes.USER_CENTER_FETCH_ERROR, (message: string) => ({
    type: ActionTypes.USER_CENTER_FETCH_ERROR,
    message
}));

export const changeUserFavoriteBoards = createAction(ActionTypes.CHANGE_USER_FAVORITE_BOARDS, (boardsInfo: Appstate.UserFavoritesBoardInfo[]) => ({
    type: ActionTypes.CHANGE_USER_FAVORITE_BOARDS,
    boardsInfo
}));

export const changeUserRecentPosts = createAction(ActionTypes.CHANGE_USER_RECENT_POSTS, (posts: Appstate.UserRecentPost[]) => ({
    type: ActionTypes.CHANGE_USER_RECENT_POSTS,
    posts
}));

export const changeUserFavoritePosts = createAction(ActionTypes.CHANGE_USER_FAVORITE_POSTS, (posts: Appstate.UserRecentPost[]) => ({
    type: ActionTypes.CHANGE_USER_FAVORITE_POSTS,
    posts
}));

export const changeUserFansInfo = createAction(ActionTypes.CHANGE_USER_FANS_INFO, (fansInfo: Appstate.UserInfo[]) => ({
    type: ActionTypes.CHANGE_USER_FANS_INFO,
    fansInfo
}));

export const changeUserFollowingsInfo = createAction(ActionTypes.CHANGE_USER_FOLLOWINGS_INFO, (followingsInfo: Appstate.UserInfo[]) => ({
    type: ActionTypes.CHANGE_USER_FOLLOWINGS_INFO,
    followingsInfo
}));

export const changeUserCenterPage = createAction(ActionTypes.CHNAGE_USER_CENTER_PAGE, (page: 'profile' | 'config' | 'myposts' | 'myfavoriteposts' | 'myfavoriteboards' | 'myfollowings' | 'myfans') => ({
    type: ActionTypes.CHNAGE_USER_CENTER_PAGE,
    page
}));

export const followUser = createAction(ActionTypes.USER_CENTER_FOLLOW_USER, (userId: number) => ({
    type: ActionTypes.USER_CENTER_FOLLOW_USER,
    id: userId
}));

export const unfollowUser = createAction(ActionTypes.USER_CENTER_UNFOLLOW_USER, (userId: number) => ({
    type: ActionTypes.USER_CENTER_UNFOLLOW_USER,
    id: userId
}));

export const userCenterTransferWealthSuccess = createAction(ActionTypes.USER_CENTER_TRANSFER_WEALTH_SUCCESS, (userNames: string[]) => ({
    type: ActionTypes.USER_CENTER_TRANSFER_WEALTH_SUCCESS,
    userNames
}));