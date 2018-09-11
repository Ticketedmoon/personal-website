import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContextAboutMeComponent } from './body-context-about-me.component';

describe('BodyContextAboutMeComponent', () => {
  let component: BodyContextAboutMeComponent;
  let fixture: ComponentFixture<BodyContextAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyContextAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContextAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
