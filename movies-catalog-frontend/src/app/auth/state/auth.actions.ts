import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user.model";

export const LOGIN_START = "auth-login-start"
export const LOGIN_SUCCESS = "auth-login-success"
export const LOGIN_FAIL = "auth-login-fail"

export const loginStartAction = createAction(
  LOGIN_START,
  props<{ username: string, password: string }>()
);

export const loginSuccessAction = createAction(
  LOGIN_SUCCESS,
  props<{ token: string, user: User }>()
);


