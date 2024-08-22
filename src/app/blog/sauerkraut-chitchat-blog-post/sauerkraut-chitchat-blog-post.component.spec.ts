import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauerkrautChitchatBlogPostComponent } from './sauerkraut-chitchat-blog-post.component';

describe('SauerkrautChitchatBlogPostComponent', () => {
  let component: SauerkrautChitchatBlogPostComponent;
  let fixture: ComponentFixture<SauerkrautChitchatBlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SauerkrautChitchatBlogPostComponent]
    });
    fixture = TestBed.createComponent(SauerkrautChitchatBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
