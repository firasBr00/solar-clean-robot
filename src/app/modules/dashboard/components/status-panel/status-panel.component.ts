import { Component, Input } from '@angular/core';
import { RobotStatus } from '../../models/robot-status';
import { Router } from '@angular/router';


@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.css']
})
export class StatusPanelComponent {
  @Input() robotData: RobotStatus | null = null;
  constructor(private router: Router) {}

  goToMissions() {
  this.router.navigate(['/liste-mission']);
}
}