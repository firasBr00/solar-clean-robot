import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { RobotStatus } from '../../models/robot-status';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  @Input() robotId!: number;
  robotPositions: {lat: number, lng: number}[] = [];

  lastUpdated = new Date();
  robotStatus: RobotStatus = {
  batteryLevel: 0,
  cleaningProgress: 0,
  temperature: 0,
  status: 'Charging'
};

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getRobotStatus().subscribe(data => {
      this.robotStatus = data;
    });
  }
}