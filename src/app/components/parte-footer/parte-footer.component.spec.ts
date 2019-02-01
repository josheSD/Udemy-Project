import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteFooterComponent } from './parte-footer.component';

describe('ParteFooterComponent', () => {
  let component: ParteFooterComponent;
  let fixture: ComponentFixture<ParteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
