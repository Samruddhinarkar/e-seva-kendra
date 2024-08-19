import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateAssignRoleComponent } from './add-update-assign-role.component';

describe('AddUpdateAssignRoleComponent', () => {
  let component: AddUpdateAssignRoleComponent;
  let fixture: ComponentFixture<AddUpdateAssignRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateAssignRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateAssignRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
