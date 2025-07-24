import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMissionsComponent } from './liste-missions.component';

describe('ListeMissionsComponent', () => {
  let component: ListeMissionsComponent;
  let fixture: ComponentFixture<ListeMissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeMissionsComponent]
    });
    fixture = TestBed.createComponent(ListeMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
