import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./type";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators =  {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: user
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload
    }),
    setIsAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload: auth
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload
    }),
    // async action creator
    login: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const mockUsers = await axios.get('./users.json')
            console.log("axios", mockUsers)
        }
        catch (e) {
            dispatch(AuthActionCreators.setError("There is some error on server when login"))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {

        }
        catch (e) {

        }
    }

}