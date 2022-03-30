import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsSelectComponent } from './tv-shows-select.component';

describe('TvShowsSelectComponent', () => {
  let component: TvShowsSelectComponent;
  let fixture: ComponentFixture<TvShowsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
