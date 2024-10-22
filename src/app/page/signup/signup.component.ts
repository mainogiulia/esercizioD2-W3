import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      surname: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      confPassword: this.fb.control('', [Validators.required]),
      gender: this.fb.control('', [Validators.required]),
      profilePic: this.fb.control(''),
      biografy: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
    });
  }
  send() {
    console.log(this.form.value);
  }
}
