/* eslint-disable @angular-eslint/contextual-lifecycle */
import { User } from 'src/app/model/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements OnInit {
  favorites!: unknown[];

  constructor(private db: AngularFirestore, private auth: AngularFireAuth, private favoritesService: FavoritesService,) { }
  ngOnInit(): void {
    this.favoritesService.getFavorites().then((favoritesObservable: { subscribe: (arg0: (favorites: any) => void) => void; }) => {
      favoritesObservable.subscribe((favorites: unknown[]) => {
        this.favorites = favorites;
        this.updateFilteredFavorites();
      }
     ) }
    )
  }
  updateFilteredFavorites() {
    throw new Error('Method not implemented.');
  }

  addToFavorites(team: any) {
    return this.auth.currentUser.then((user) => {
      if (user) {
        // user no es null, procede normalmente
        return this.db.collection(`users/${user.uid}/favorites`).add(team);
      } else {
        // user es null, maneja este caso
        console.error('No user is currently signed in.');
        return Promise.reject('No user is currently signed in.');
      }
    });

  }

  getFavorites() {
    return this.auth.currentUser.then((user) => {
      if (user) {
        // Obtiene los equipos favoritos del usuario de Firebase
        return this.db.collection(`users/${user.uid}/favorites`).valueChanges();
      } else {
        // Maneja el caso en que no hay un usuario autenticado
        console.error('No user is currently signed in.');
        return Promise.reject('No user is currently signed in.');
      }
    });
  }

  removeFromFavorites(teamName: string): Promise<void> {
    return this.auth.currentUser.then(user => {
      if (user) {
        // Encuentra el documento del equipo en la colección de favoritos del usuario y lo elimina
        return this.db.collection(`users/${user.uid}/favorites`, ref => ref.where('name', '==', teamName))
          .get()
          .toPromise()
          .then(querySnapshot => {
            if (querySnapshot) {
              querySnapshot.forEach(doc => {
                doc.ref.delete();
              });
            }
          });
      } else {
        // Maneja el caso en que no hay un usuario autenticado
        console.error('No user is currently signed in.');
        return Promise.reject('No user is currently signed in.');
      }
    });
}}
