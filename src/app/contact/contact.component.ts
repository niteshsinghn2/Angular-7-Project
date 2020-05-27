import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
	
    });
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
