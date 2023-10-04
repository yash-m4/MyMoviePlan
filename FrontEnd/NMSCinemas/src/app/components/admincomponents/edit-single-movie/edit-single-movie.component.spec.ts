import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleMovieComponent } from './edit-single-movie.component';

describe('EditSingleMovieComponent', () => {
  let component: EditSingleMovieComponent;
  let fixture: ComponentFixture<EditSingleMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSingleMovieComponent]
    });
    fixture = TestBed.createComponent(EditSingleMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
