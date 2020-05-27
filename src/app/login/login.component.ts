import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
success = false;
submitted = false;
constructor(private router: Router,private formBuilder: FormBuilder) { }
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
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["dashboard"]);
    }
  }
  onSubmit() {
this.submitted = true;
    if (this.messageForm.invalid) {
        return;
    }
}

}
