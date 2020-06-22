import { Injectable } from '@angular/core';
import { ReqtofromapiService } from './reqtofromapi.service';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUser: Users;
  
  constructor(private _Reqtofromapi: ReqtofromapiService) { }

  saveUser(usr: Users) {
    return this._Reqtofromapi.postUsers('users/save', usr);
  }



}
