import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderDashboardComponent } from './team-leader-dashboard.component';

describe('TeamLeaderDashboardComponent', () => {
  let component: TeamLeaderDashboardComponent;
  let fixture: ComponentFixture<TeamLeaderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLeaderDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
