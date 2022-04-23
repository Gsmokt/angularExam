import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePassComponent } from './score-pass.component';

describe('ScorePassComponent', () => {
  let component: ScorePassComponent;
  let fixture: ComponentFixture<ScorePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
