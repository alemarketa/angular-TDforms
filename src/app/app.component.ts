import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!', form);
  // }

  onSubmit() {
    console.log('Submitted VC', this.signupForm);
  }
}
