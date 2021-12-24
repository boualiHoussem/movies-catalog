import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loginStartAction, loginSuccessAction} from "./auth.actions";
import {exhaustMap, map} from "rxjs/operators";
import {formatUser} from "../../utils/common.utils";

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  constructor(private authService: AuthService,
              private actions$: Actions) {
  }

  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStartAction),
      exhaustMap(
        (action) => {
          return this.authService.authenticate(action.username, action.password).pipe(
            map((data) => {
              console.log("Login Data ", data)
              const user = formatUser(data.user);
              return loginSuccessAction({token: data.token, user: user})
            })
          )
        }
      )
    )
  });

}
