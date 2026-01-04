import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsGetterSetter } from './signals-getter-setter';

describe('SignalsGetterSetter', () => {
  let component: SignalsGetterSetter;
  let fixture: ComponentFixture<SignalsGetterSetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsGetterSetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsGetterSetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
