import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystorypageComponent } from './mystorypage.component';

describe('MystorypageComponent', () => {
  let component: MystorypageComponent;
  let fixture: ComponentFixture<MystorypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MystorypageComponent]
    });
    fixture = TestBed.createComponent(MystorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
