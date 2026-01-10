import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSetting } from './public-setting';

describe('PublicSetting', () => {
  let component: PublicSetting;
  let fixture: ComponentFixture<PublicSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
