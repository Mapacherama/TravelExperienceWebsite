import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningLanguagesComponent } from './learning-languages.component';

describe('LearningLanguagesComponent', () => {
  let component: LearningLanguagesComponent;
  let fixture: ComponentFixture<LearningLanguagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningLanguagesComponent]
    });
    fixture = TestBed.createComponent(LearningLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
