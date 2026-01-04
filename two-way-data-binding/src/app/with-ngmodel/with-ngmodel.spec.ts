import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithNgmodel } from './with-ngmodel';

describe('WithNgmodel', () => {
  let component: WithNgmodel;
  let fixture: ComponentFixture<WithNgmodel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithNgmodel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithNgmodel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
