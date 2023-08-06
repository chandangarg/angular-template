import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCardDetailComponent } from './courses-card-detail.component';

describe('CoursesCardDetailComponent', () => {
  let component: CoursesCardDetailComponent;
  let fixture: ComponentFixture<CoursesCardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesCardDetailComponent]
    });
    fixture = TestBed.createComponent(CoursesCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
