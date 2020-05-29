import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  message = '';
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
	
    });
  }

logOut() : void {
     this.router.navigate([""]);
    
  }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
		this.message = "Invalid";
        return;
    }

    this.success = true;
	this.message = "valid";
	alert("Information Sent Successfully to Support team");
}

}
