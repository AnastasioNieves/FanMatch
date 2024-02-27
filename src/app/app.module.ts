// Import necessary modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
import { RegistroPage } from './registro/registro.page';
import { HomePage } from './home/home.page';
import { SquadsPage } from './squads/squads.page';

import { FooterComponent } from './Components/commons/footer/footer.component';
import { NewsPage } from './news/news.page';

// Import AngularFire related modules
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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
  declarations: [
    AppComponent,
    LoginPage,
    RegistroPage,
    HomePage,
    SquadsPage,

    FooterComponent,
    NewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
