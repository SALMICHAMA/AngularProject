import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorgansComponent } from './listorgans.component';

describe('ListorgansComponent', () => {
  let component: ListorgansComponent;
  let fixture: ComponentFixture<ListorgansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListorgansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListorgansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
