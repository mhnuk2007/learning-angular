import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSignal } from './with-signal';

describe('WithSignal', () => {
  let component: WithSignal;
  let fixture: ComponentFixture<WithSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
