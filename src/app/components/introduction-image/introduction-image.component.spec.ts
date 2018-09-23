import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionImageComponent } from './introduction-image.component';

describe('MyProtocolForLifeComponent', () => {
  let component: IntroductionImageComponent;
  let fixture: ComponentFixture<IntroductionImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
