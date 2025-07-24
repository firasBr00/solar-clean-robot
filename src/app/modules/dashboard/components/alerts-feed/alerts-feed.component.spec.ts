import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsFeedComponent } from './alerts-feed.component';

describe('AlertsFeedComponent', () => {
  let component: AlertsFeedComponent;
  let fixture: ComponentFixture<AlertsFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsFeedComponent]
    });
    fixture = TestBed.createComponent(AlertsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
