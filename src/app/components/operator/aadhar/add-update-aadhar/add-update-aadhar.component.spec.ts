import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateAadharComponent } from './add-update-aadhar.component';

describe('AddUpdateAadharComponent', () => {
  let component: AddUpdateAadharComponent;
  let fixture: ComponentFixture<AddUpdateAadharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateAadharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateAadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
