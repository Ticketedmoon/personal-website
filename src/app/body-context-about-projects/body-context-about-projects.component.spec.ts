import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContextAboutProjectsComponent } from './body-context-about-projects.component';

describe('BodyContextAboutProjectsComponent', () => {
  let component: BodyContextAboutProjectsComponent;
  let fixture: ComponentFixture<BodyContextAboutProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContextAboutProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContextAboutProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
