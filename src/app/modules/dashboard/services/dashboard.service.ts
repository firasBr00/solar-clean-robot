import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getRobotStatus(): Observable<any> {
    return of({
      batteryLevel: 78,
      cleanningProgress: 45,
      temperature: 31,
      status: 'En fonctionn'
    });
  }
}