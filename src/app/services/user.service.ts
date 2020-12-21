import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface tokenResponse {
  token: string
}

export interface emailResponse {
  response: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  guest() {
    return this.http.get<tokenResponse>('/api/user/auth')
  }

  authenticate(email, password, stay, token) {
    const postData = {
      email, password, stay
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    }
    console.log(this.authenticate, httpOptions)
    return this.http
      .post<tokenResponse>(
        '/api/user/auth',
        postData,
        httpOptions
      )
  }

  getUserInfo(token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    }
    return this.http.get('/api/user/', httpOptions)
  }

  emailExits(email, token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    }
    return this.http.post<emailResponse>('/api/user/email', { email }, httpOptions)
  }

  registerUser (postData, token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-token': token
      })
    }
    return this.http.post<tokenResponse>('/api/user/register', postData, httpOptions)
  }

}
