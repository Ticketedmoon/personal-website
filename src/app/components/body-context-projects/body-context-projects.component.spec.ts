import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContextProjectsComponent } from './body-context-projects.component';

describe('BodyContextProjectsComponent', () => {
  let component: BodyContextProjectsComponent;
  let fixture: ComponentFixture<BodyContextProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContextProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContextProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
