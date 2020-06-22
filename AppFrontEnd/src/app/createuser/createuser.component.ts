import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  public _id: string;
  public email: string;
  public password: string;
  con_password: string;
  displaymessage: false;

  constructor(public _usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  createnewuser(form: NgForm) {

    this._usersService.saveUser(form.value).subscribe((res) => {
      console.log('user created');
      this.router.navigate(['/login']);
    })



  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this._usersService.selectedUser = {
      _id: "",
      email: "",
      password: ""

    }
  }




}
