import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeaderReportComponent } from './team-leader-report.component';

describe('TeamLeaderReportComponent', () => {
  let component: TeamLeaderReportComponent;
  let fixture: ComponentFixture<TeamLeaderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLeaderReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamLeaderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
