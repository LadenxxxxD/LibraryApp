import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
//使用可被注入标签， 必须加入到一个provider里->放入到app.module里
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(userId: string, password: string) {
    const body = {
      userId: userId,
      password: password
    }
    console.log(userId, password);
    console.log( typeof userId);
    // return this.httpClient.post<boolean>('http://localhost:8080/login', body);
    if ( typeof userId === 'undefined' || userId === '' || typeof password === 'undefined' || password === '') {
      return this.httpClient.get<boolean>('assets/testJson/loginFalse.json');
    } else {
      return this.httpClient.get<boolean>('assets/testJson/login.json');
    }

  }
}


