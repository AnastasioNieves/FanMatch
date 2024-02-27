import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantillasService } from '../services/plantillas.service';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.page.html',
  styleUrls: ['./squads.page.scss'],
})
export class SquadsPage implements OnInit {


  constructor(private route: ActivatedRoute, private PlantillasService: PlantillasService) { }

  teamId: number=0;
  squad: any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamId = +params['id'];
      this.PlantillasService.getTeam(this.teamId).subscribe(
        (data: any) => {
          this.squad = data.squad;
          console.log(data);
        },
        (error: any) => {
          console.error('Error al obtener los jugadores:', error);
        }
      );
    });
  }

}
