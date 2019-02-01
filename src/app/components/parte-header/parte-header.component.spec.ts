import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteHeaderComponent } from './parte-header.component';

describe('ParteHeaderComponent', () => {
  let component: ParteHeaderComponent;
  let fixture: ComponentFixture<ParteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
