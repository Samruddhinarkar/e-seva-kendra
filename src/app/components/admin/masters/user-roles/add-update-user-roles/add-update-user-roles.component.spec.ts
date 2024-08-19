import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateUserRolesComponent } from './add-update-user-roles.component';

describe('AddUpdateUserRolesComponent', () => {
  let component: AddUpdateUserRolesComponent;
  let fixture: ComponentFixture<AddUpdateUserRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateUserRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateUserRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
