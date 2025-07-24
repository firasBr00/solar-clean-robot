import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts-feed',
  templateUrl: './alerts-feed.component.html',
  styleUrls: ['./alerts-feed.component.css']
})
export class AlertsFeedComponent implements OnInit {


  @Input() robotId!: number;

  missionEnCours: any = null;

  ngOnInit(): void {
    // Simuler une récupération via service ou backend
    const missions = [
      {
        robotId: 1,
        status: 'En cours',
        dateDebut: '2025-07-24 08:00',
        zone: 'Toit bâtiment A',
        surface: '30 m²',
        objectif: 'Nettoyage standard'
      },
      {
        robotId: 2,
        status: 'Terminée',
        dateDebut: '2025-07-20 14:00',
        zone: 'Ferme solaire B',
        surface: '50 m²',
        objectif: 'Nettoyage intensif'
      }
    ];

    // Filtrer la mission en cours pour ce robot
    this.missionEnCours = missions.find(
      m => m.robotId === this.robotId && m.status === 'En cours'
    );
  }
}


