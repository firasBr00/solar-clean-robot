import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';
import { CleaningMapComponent } from './components/cleaning-map/cleaning-map.component';
import { AlertsFeedComponent } from './components/alerts-feed/alerts-feed.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { GoogleMapsModule } from '@angular/google-maps';
import { MissionComponent } from './components/mission/mission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeMissionsComponent } from './components/liste-missions/liste-missions.component'; // <-- Ajoutez cette ligne

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    StatusPanelComponent,
    CleaningMapComponent,
    AlertsFeedComponent,
    MissionComponent,
    ListeMissionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    BrowserModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }