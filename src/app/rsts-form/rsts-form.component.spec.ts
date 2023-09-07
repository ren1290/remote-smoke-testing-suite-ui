import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSTSFormComponent } from './rsts-form.component';

describe('RSTSFormComponent', () => {
  let component: RSTSFormComponent;
  let fixture: ComponentFixture<RSTSFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSTSFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSTSFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
