import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
success = false;
submitted = false;
constructor(private router: Router,private formBuilder: FormBuilder,private _auth: AuthenticationService,private _router: Router) {
if (this._auth.loggedIn) {  
      this._router.navigate(['dashboard']);  
    } 
	}
messageForm: FormGroup;
username: string;
password: string;

  ngOnInit() {
	  this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
login(){
    //if(this.username == 'admin' && this.password == 'admin'){
     //this.router.navigate(["dashboard"]);
    //}
	if (this.username != '' && this.password != '') {  
      if (this._auth.login(this.username, this.password)) {  
        this._router.navigate(["dashboard"]);  
      }  
      else  {
        alert("Wrong username or password");  
    }  
  
  }
  
}
  onSubmit() {
this.submitted = true;
    if (this.messageForm.invalid) {
        return;
    }
}

}
