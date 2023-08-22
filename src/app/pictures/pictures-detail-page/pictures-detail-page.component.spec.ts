import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesDetailPageComponent } from './pictures-detail-page.component';

describe('PicturesDetailPageComponent', () => {
  let component: PicturesDetailPageComponent;
  let fixture: ComponentFixture<PicturesDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicturesDetailPageComponent]
    });
    fixture = TestBed.createComponent(PicturesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
