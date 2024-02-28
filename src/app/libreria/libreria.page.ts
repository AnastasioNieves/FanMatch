
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/firebase.service';
import {CamaraService } from '../services/camara.service';




@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.page.html',
  styleUrls: ['./libreria.page.scss'],
})
export class LibreriaPage
{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private CamaraService: CamaraService
  ) {
    this.form = this.formBuilder.group({
      image: ['', Validators.required]

    });
  }


  async takeImage() {

      const dataUrl = (await this.CamaraService.takePicture('Imagen del estadio')).dataUrl;
      this.form.controls['image'].setValue(dataUrl);
  }

  async uploadImage() {
    let dataUrl = this.form.value.image;
    let imageUrl = await this.authService.uploadImage("img/estadios/" + Date.now(), dataUrl);
    this.form.controls['image'].setValue(imageUrl);
  }

  async estadios(){

  let dataUrl = this.form.value.image;
  let imagePath = "img/estadios/" + Date.now();
  let imageUrl = await this.authService.uploadImage(imagePath, dataUrl);
  this.form.controls['image'].setValue(imageUrl);


  }

}
