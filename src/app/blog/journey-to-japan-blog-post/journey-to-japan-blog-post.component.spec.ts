import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyToJapanBlogPostComponent } from './journey-to-japan-blog-post.component';

describe('JourneyToJapanBlogPostComponent', () => {
  let component: JourneyToJapanBlogPostComponent;
  let fixture: ComponentFixture<JourneyToJapanBlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyToJapanBlogPostComponent]
    });
    fixture = TestBed.createComponent(JourneyToJapanBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
