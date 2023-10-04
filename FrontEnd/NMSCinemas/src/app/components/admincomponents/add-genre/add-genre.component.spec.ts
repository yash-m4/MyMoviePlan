import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenreComponent } from './add-genre.component';

describe('AddGenreComponent', () => {
  let component: AddGenreComponent;
  let fixture: ComponentFixture<AddGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGenreComponent]
    });
    fixture = TestBed.createComponent(AddGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
