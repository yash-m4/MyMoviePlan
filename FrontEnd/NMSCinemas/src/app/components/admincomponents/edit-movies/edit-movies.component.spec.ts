import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoviesComponent } from './edit-movies.component';

describe('EditMoviesComponent', () => {
  let component: EditMoviesComponent;
  let fixture: ComponentFixture<EditMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMoviesComponent]
    });
    fixture = TestBed.createComponent(EditMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
