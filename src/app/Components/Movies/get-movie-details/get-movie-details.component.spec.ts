import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMovieDetailsComponent } from './get-movie-details.component';

describe('GetMovieDetailsComponent', () => {
  let component: GetMovieDetailsComponent;
  let fixture: ComponentFixture<GetMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMovieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
