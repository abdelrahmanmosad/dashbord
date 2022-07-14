import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   Name: RegExp = /^[a-zA-z0-9]{3,20}$/;
  Password: RegExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
  NameError?: string;
  PasswordError?: string;

  constructor() { }

  ngOnInit(): void {
  }

 
  chickname(name: any) {
    console.log(this.NameError);
    
    if (!this.Name.test(name)) {
      this.NameError = 'user name should be characters or numbers';

    }
    else {
      this.NameError=undefined;
    }
  }
  chickpass(password: any) {
    if (!this.Password.test(password)) {
      this.PasswordError ="password should contain *,# or . and more than 6 characters"
    }
    else {
      this.PasswordError = undefined;
    }
   
    
  }
  
}
