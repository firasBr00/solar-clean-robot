import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningMapComponent } from './cleaning-map.component';

describe('CleaningMapComponent', () => {
  let component: CleaningMapComponent;
  let fixture: ComponentFixture<CleaningMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleaningMapComponent]
    });
    fixture = TestBed.createComponent(CleaningMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
