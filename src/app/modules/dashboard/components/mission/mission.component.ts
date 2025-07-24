import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {
  @Input() isOpen: boolean = true; // Ajout de la propriété isOpen
  @Input() robots: any[] = []; // Ajout de la propriété robots
  
  @Output() close = new EventEmitter<void>();
  @Output() submitMission = new EventEmitter<any>();

  missionForm: FormGroup; // Déclaration de missionForm

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire
    this.missionForm = this.fb.group({
      robot_id: ['', Validators.required],
      heure_debut: ['', Validators.required],
      heure_fin: ['', Validators.required],
      points: this.fb.array([this.createPoint()])
    });
  }

  // Getter pour accéder aux points du formulaire
  get points(): FormArray {
    return this.missionForm.get('points') as FormArray;
  }

  // Méthode pour créer un nouveau point
  createPoint(): FormGroup {
    return this.fb.group({
      coordinates: ['', Validators.required]
    });
  }

  // Méthode pour ajouter un point
  addPoint(): void {
    this.points.push(this.createPoint());
  }

  // Méthode pour supprimer un point
  removePoint(index: number): void {
    this.points.removeAt(index);
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.missionForm.valid) {
      this.submitMission.emit(this.missionForm.value);
    }
  }

  // Méthode pour fermer la modal
  onClose(): void {
    this.close.emit();
  }
}