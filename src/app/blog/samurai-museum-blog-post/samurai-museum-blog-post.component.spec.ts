import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuraiMuseumBlogPostComponent } from './samurai-museum-blog-post.component';

describe('SamuraiMuseumBlogPostComponent', () => {
  let component: SamuraiMuseumBlogPostComponent;
  let fixture: ComponentFixture<SamuraiMuseumBlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamuraiMuseumBlogPostComponent]
    });
    fixture = TestBed.createComponent(SamuraiMuseumBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
