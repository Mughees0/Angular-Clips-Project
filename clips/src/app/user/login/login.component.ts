import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AngularFireAuth) {}

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created';
  alertColor = 'blue';
  inSubmission = false;

  credentials = {
    email: '',
    password: '',
  };

  async login() {
    this.showAlert = true;
    this.alertMsg = "Please wait! You're being logged in";
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (error) {
      console.log(error);
      this.alertMsg = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.alertMsg = "Success! You're logged in.";
    this.alertColor = 'green';
  }
}
