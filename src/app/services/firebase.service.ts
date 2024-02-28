


import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import { ref, getStorage, uploadString, getDownloadURL } from 'firebase/storage';

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

  // Subir foto
  async uploadImage(path: string, data_url: string) {
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
      return getDownloadURL(ref(getStorage(), path))
    });
  }


}




