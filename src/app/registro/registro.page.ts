import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../services/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, @Inject(AlertController) private alertController: AlertController,private router: Router) {}

  ngOnInit() {
    this.formularioRegistro = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmacionPassword: ['', [Validators.required, this.matchPasswordValidator]]
    });
  }


  matchPasswordValidator(control: FormGroup): { [key: string]: any } | null {
    const password = control.get('password')?.value;
    const confirmation = control.get('confirmacionPassword')?.value;

    if (password !== confirmation) {
      return { passwordsDontMatch: true };
    }

    return null;
  }

  async register() {
    if (this.formularioRegistro.valid) {
      try {
        await this.authService.register(
          this.formularioRegistro.value as User
        );
        this.router.navigate(['/login']);

        // Redirect to login page or handle successful registration

      } catch (error) {
        console.error('Error during registration:', error);

        const alertController = await this.alertController.create({
          header: 'Error de registro',
          message: this.getErrorMessage('error'), // Get specific error message
          buttons: ['OK']
        });

        await alertController.present();
      }
    } else {
      console.error('Form is invalid');

      const alertController = await this.alertController.create({
        header: 'Datos inválidos',
        message: 'Por favor, revise los campos del formulario y corrija los errores.',
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
