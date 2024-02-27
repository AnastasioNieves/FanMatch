

import { Component, OnInit } from '@angular/core';
import { SearchTeamService } from '../services/search-teams.service'; // Ajusta la ruta según tu estructura
import { Router } from '@angular/router'; // Importa Router



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  clubs: any[] = []; // Lista de equipos obtenida del servicio
  filteredTeams: any[] = []; // Lista de equipos filtrada

  searchTerm: string = ''; // Término de búsqueda

  constructor(private searchTeamService: SearchTeamService, private router: Router) { } // Inyecta Router

  ngOnInit(): void {
    // Obtener los datos de los equipos desde el servicio
    this.searchTeamService.getTeams().subscribe(
      (data: any) => {
        this.clubs = data.clubs; // Asignar los datos a la lista de equipos
        this.filteredTeams = data.clubs; // Inicialmente, mostrar todos los equipos
      },
      (error: any) => {
        console.error('Error al obtener los equipos:', error);
      }
    );
  }

  // Actualizar la lista de equipos filtrada cuando cambia el término de búsqueda
  updateFilteredTeams(): void {
    this.filteredTeams = this.clubs.filter((club: any) =>
      club.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Navega a la vista de plantillas para el equipo seleccionado
  goToTeam(id: number): void {
    this.router.navigate(['/squads', id]);
  }




}
