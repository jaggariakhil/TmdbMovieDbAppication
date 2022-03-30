import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMovieProvidersComponent } from './get-movie-providers.component';

describe('GetMovieProvidersComponent', () => {
  let component: GetMovieProvidersComponent;
  let fixture: ComponentFixture<GetMovieProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMovieProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMovieProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
