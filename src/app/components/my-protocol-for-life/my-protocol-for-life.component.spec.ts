import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProtocolForLifeComponent } from './my-protocol-for-life.component';

describe('MyProtocolForLifeComponent', () => {
  let component: MyProtocolForLifeComponent;
  let fixture: ComponentFixture<MyProtocolForLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProtocolForLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProtocolForLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
