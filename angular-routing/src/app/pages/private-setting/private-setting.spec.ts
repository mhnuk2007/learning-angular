import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSetting } from './private-setting';

describe('PrivateSetting', () => {
  let component: PrivateSetting;
  let fixture: ComponentFixture<PrivateSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateSetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
