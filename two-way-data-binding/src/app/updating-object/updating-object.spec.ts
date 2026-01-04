import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingObject } from './updating-object';

describe('UpdatingObject', () => {
  let component: UpdatingObject;
  let fixture: ComponentFixture<UpdatingObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatingObject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingObject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
