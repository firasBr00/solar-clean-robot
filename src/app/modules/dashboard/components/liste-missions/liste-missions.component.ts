import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-missions',
  templateUrl: './liste-missions.component.html',
  styleUrls: ['./liste-missions.component.css']
})
export class ListeMissionsComponent implements OnInit {
missions = [
    { id: 1, date: '2025-07-20', status: 'Terminée', surface: '25 m²' },
    { id: 2, date: '2025-07-22', status: 'En cours', surface: '30 m²' },
    { id: 3, date: '2025-07-24', status: 'En attente', surface: '20 m²' }
  ];

  ngOnInit(): void {}
}
