import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePrioritiesComponent } from './add-update-priorities.component';

describe('AddUpdatePrioritiesComponent', () => {
  let component: AddUpdatePrioritiesComponent;
  let fixture: ComponentFixture<AddUpdatePrioritiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdatePrioritiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdatePrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
