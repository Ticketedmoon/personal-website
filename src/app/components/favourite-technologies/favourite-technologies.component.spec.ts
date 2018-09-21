import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTechnologiesComponent } from './favourite-technologies.component';

describe('FavouriteTechnologiesComponent', () => {
  let component: FavouriteTechnologiesComponent;
  let fixture: ComponentFixture<FavouriteTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
