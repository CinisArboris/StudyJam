import { Injectable } from '@angular/core';

/* auth firebase */
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AutenticacionService {

  userData: Observable<firebase.User>;
  constructor(public angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

    /* Sign in */
    SignIn(email: string, password: string) {
      this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
          console.log('Bienvenido de nuevo :) !');
          console.log(email);
        })
        .catch(err => {
          console.log('Algo salio mal:',err.message);
          console.log(email);
        });
    }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log('Perfecto, bienvenido :) !', res);
      }).catch(error => {
        console.log('Algo salio mal:', error.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut();
  }
}
