import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ACCESS_API} from "../utils/common.constants";
import {Observable} from "rxjs";
import {LoginResponse} from "../models/login.response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<LoginResponse> {
    console.log('Authenticate service', username, password)
    return this.http.post<LoginResponse>(`${ACCESS_API}/authenticate`, {
      username: username,
      password: password
    });
  }

}
