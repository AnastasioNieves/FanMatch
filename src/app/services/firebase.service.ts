


import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';


import { User } from './../model/user.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthService {



  constructor() {}

  login(user:User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  register(user:User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  logout() {
    return signOut(getAuth());
  }



}




