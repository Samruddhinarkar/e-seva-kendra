import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDesignationsComponent } from './add-update-designations.component';

describe('AddUpdateDesignationsComponent', () => {
  let component: AddUpdateDesignationsComponent;
  let fixture: ComponentFixture<AddUpdateDesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDesignationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
