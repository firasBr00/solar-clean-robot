import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';




@Component({
  selector: 'app-cleaning-map',
  templateUrl: './cleaning-map.component.html',
  styleUrls: ['./cleaning-map.component.css']
})
export class CleaningMapComponent implements OnInit {
 private map: any;
  private robotMarker: any;

  robotPosition = {
    lat: 36.8065,   // latitude de départ (ex : Tunis)
    lng: 10.1815    // longitude de départ
  };

  ngOnInit(): void {
    this.initMap();
    this.placeRobot();
    this.simulateMovement(); // tu peux remplacer par un vrai service MQTT/API
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.robotPosition.lat, this.robotPosition.lng],
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private placeRobot(): void {
    const robotIcon = L.icon({
      iconUrl: 'assets/robotIcon.png', // Remplace par une image de robot
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });

    this.robotMarker = L.marker([this.robotPosition.lat, this.robotPosition.lng], {
      icon: robotIcon
    }).addTo(this.map);
  }

  // 🔄 Simulation du déplacement (toutes les 3 sec)
  private simulateMovement(): void {
    setInterval(() => {
      this.robotPosition.lat += (Math.random() - 0.5) * 0.001;
      this.robotPosition.lng += (Math.random() - 0.5) * 0.001;
      this.robotMarker.setLatLng([this.robotPosition.lat, this.robotPosition.lng]);
      this.map.panTo([this.robotPosition.lat, this.robotPosition.lng]);
    }, 3000);
  }
}