import { Component, Inject, OnInit } from '@angular/core';
// import { AuthService } from '../../services/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder
import { AlertController } from '@ionic/angular';
// import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
// private authService: AuthService
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';
  formularioLogin!: FormGroup;

  constructor( private fb: FormBuilder, @Inject(AlertController) private alertController: AlertController,private router: Router) { }

  ngOnInit() {
    this.formularioLogin = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  async login() {
    try {
      // await this.authService.login(this.formularioLogin.value as User);
      // this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error during login:', error);

      const alertController = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message: this.getErrorMessage('error'), // Get specific error message
        buttons: ['OK']
      });

      await alertController.present();
    }
  }


  getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Contraseña incorrecta.';
      case 'auth/user-not-found':
        return 'Usuario no encontrado.';
      case 'auth/invalid-email':
        return 'Correo electrónico inválido.';
      // Add more cases for other error codes
      default:
        return 'Credenciales para inicio de sesión invalidas.';
    }
  }}

