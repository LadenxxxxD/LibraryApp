import { Injectable } from '@angular/core';
import { UserEntity } from '../interfaces/user.entity';

@Injectable()
export class AuthService {
  private user: UserEntity;

  public login() {
    this.user = {
      userId : '0001',
      userName : '123456',
      password : '123456'
    }
  }

  public isLogin() {
    return this.user != null;
  }
}

