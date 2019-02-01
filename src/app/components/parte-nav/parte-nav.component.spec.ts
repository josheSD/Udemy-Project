import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteNavComponent } from './parte-nav.component';

describe('ParteNavComponent', () => {
  let component: ParteNavComponent;
  let fixture: ComponentFixture<ParteNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParteNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
