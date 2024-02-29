import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatingHealthyComponent } from './eating-healthy.component';

describe('EatingHealthyComponent', () => {
  let component: EatingHealthyComponent;
  let fixture: ComponentFixture<EatingHealthyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EatingHealthyComponent]
    });
    fixture = TestBed.createComponent(EatingHealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
