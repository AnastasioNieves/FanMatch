import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { HttpClientModule } from '@angular/common/http';
import { SquadsPage } from './squads/squads.page';
import { RegistroPage } from './registro/registro.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginPage },
  { path: 'registro', component: RegistroPage },
  { path: 'home', component: HomePage },
  { path: 'squads/:id', component: SquadsPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
