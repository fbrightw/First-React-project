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
            const response = await axios.get<IUser[]>('./users.json')
            const mockUser = response.data.find(user => user.email === email && user.password === password);
            if (mockUser) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('email', mockUser.email);
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(mockUser))
            }
            else {
                dispatch(AuthActionCreators.setError("Неправильный логин или пароль"))
            }
            AuthActionCreators.setIsLoading(false);
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