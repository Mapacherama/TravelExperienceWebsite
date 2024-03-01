import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingOutWhileAbroadComponent } from './working-out-while-abroad.component';

describe('WorkingOutWhileAbroadComponent', () => {
  let component: WorkingOutWhileAbroadComponent;
  let fixture: ComponentFixture<WorkingOutWhileAbroadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingOutWhileAbroadComponent]
    });
    fixture = TestBed.createComponent(WorkingOutWhileAbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
