import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdharComponent } from './list-adhar.component';

describe('ListAdharComponent', () => {
  let component: ListAdharComponent;
  let fixture: ComponentFixture<ListAdharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
