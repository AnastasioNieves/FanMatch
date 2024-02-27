
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { SearchTeamService } from 'src/app/services/search-teams.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})

export class FavoritosPage implements OnInit {
  searchTerm = '';


  favorites: any[] = [];
  filteredFavorites: any[] = [];
  clubs: any[] = [];

  constructor(private favoritesService: FavoritesService, private searchTeamService: SearchTeamService, private router: Router) { }

  ngOnInit() {
    this.favoritesService.getFavorites().then((favoritesObservable: { subscribe: (arg0: (favorites: any) => void) => void; }) => {
      favoritesObservable.subscribe((favorites: any) => {
        if (favorites) {

          this.updateFilteredFavorites();
        } else {
          console.error('No favorites found.');
        }
      });
    });

    this.searchTeamService.getTeams().subscribe(teams => {
      if (teams) {
        this.clubs = teams; // Guarda la lista de equipos obtenida del servicio
        this.updateFilteredFavorites();
      } else {
        console.error('No teams found.');
      }
    });
  }

  updateFilteredFavorites() {
    if (this.clubs && this.favorites) {
      // Filtra los equipos para mostrar solo los que el usuario ha guardado como favoritos
      this.filteredFavorites = this.clubs.filter(club => {
        if (this.favorites.some(favorite => favorite.name === club.name) && club.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    }
  }

  // Navega a la vista de plantillas para el equipo seleccionado
  goToTeam(id: number): void {
    if (id) {
      this.router.navigate(['/squads', id]);
    } else {
      console.error('No team ID provided.');
    }
  }

  removeFromFavorites(club: any) {
    this.favoritesService.removeFromFavorites(club.name).then(() => {
      // Actualiza la lista de favoritos después de eliminar un equipo
      this.updateFilteredFavorites();
    });
  }
}
