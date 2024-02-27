import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
import { RegistroPage } from './registro/registro.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquadsPage } from './squads/squads.page';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGRqNPpLp-5OdG3w9hUriotVVbuSG528U",
  authDomain: "fan-match4.firebaseapp.com",
  projectId: "fan-match4",
  storageBucket: "fan-match4.appspot.com",
  messagingSenderId: "344260680232",
  appId: "1:344260680232:web:4ebbbd8aade21c1709331d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent,LoginPage,RegistroPage,HomePage,SquadsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,FormsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
