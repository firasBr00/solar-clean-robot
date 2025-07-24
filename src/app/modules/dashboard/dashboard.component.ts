import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Robot {
  id: number;
  name: string;
  status: 'Actif' | 'En maintenance' | 'Hors ligne';
  lastCleaning: Date | null;
}
interface Mission{
  id: number;
  heure_debut: Date;
  heure_fin: Date;
  id_robot: number;
  
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showMissionModal = false;
  robots: Robot[] = [
    { 
      id: 1, 
      name: 'Robot Alpha', 
      status: 'Actif', 
      lastCleaning: new Date() 
    },
    { 
      id: 2, 
      name: 'Robot Beta', 
      status: 'En maintenance', 
      lastCleaning: null 
    }
  ];

  selectedRobot: Robot | null = null;

  constructor(private router: Router) {}

  onSelectRobot(robot: Robot): void {
    this.selectedRobot = robot;
    this.router.navigate(['/dashboard', robot.id]);
  }

  onDeleteRobot(id: number): void {
    this.robots = this.robots.filter(robot => robot.id !== id);
    if (this.selectedRobot?.id === id) {
      this.selectedRobot = null;
    }
  }
   openMissionModal(): void {
    this.router.navigate(['/mission']);
  }

  onAddRobot(): void {
    const newRobot: Robot = {
      id: Math.max(...this.robots.map(r => r.id)) + 1,
      name: `Robot ${String.fromCharCode(65 + this.robots.length)}`,
      status: 'Hors ligne',
      lastCleaning: null
    };
    this.robots.push(newRobot);
  }
  /*AddMission(): void {
    const newMission: Mission = {
     id: number;
     heure_debut: Date;
     heure_fin: Date;
     id_robot: number;
    };
    this.robots.push(newMission);
  }*/
}