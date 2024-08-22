import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUpItinerariesComponent } from './setting-up-itineraries.component';

describe('SettingUpItinerariesComponent', () => {
  let component: SettingUpItinerariesComponent;
  let fixture: ComponentFixture<SettingUpItinerariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingUpItinerariesComponent]
    });
    fixture = TestBed.createComponent(SettingUpItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
