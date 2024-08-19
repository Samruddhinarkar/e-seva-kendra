import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateWorkDetailsComponent } from './add-update-work-details.component';

describe('AddUpdateWorkDetailsComponent', () => {
  let component: AddUpdateWorkDetailsComponent;
  let fixture: ComponentFixture<AddUpdateWorkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateWorkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
