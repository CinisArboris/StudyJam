import { Component } from '@angular/core';

import { AutenticacionService } from './servicios/auth/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudyJam';

  email: string;
  password: string;

  constructor(public autenticacionService: AutenticacionService) {}

  signUp() {
    this.autenticacionService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signIn() {
    this.autenticacionService.SignIn(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.autenticacionService.SignOut();
  }
}
