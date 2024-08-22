import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandenburgGateBlogPostComponent } from './brandenburg-gate-blog-post.component';

describe('BrandenburgGateBlogPostComponent', () => {
  let component: BrandenburgGateBlogPostComponent;
  let fixture: ComponentFixture<BrandenburgGateBlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandenburgGateBlogPostComponent]
    });
    fixture = TestBed.createComponent(BrandenburgGateBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
