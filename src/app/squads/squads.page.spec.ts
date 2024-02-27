import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SquadsPage } from './squads.page';

describe('SquadsPage', () => {
  let component: SquadsPage;
  let fixture: ComponentFixture<SquadsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
