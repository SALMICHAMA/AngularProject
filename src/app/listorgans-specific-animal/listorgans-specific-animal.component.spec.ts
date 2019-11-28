import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorgansSpecificAnimalComponent } from './listorgans-specific-animal.component';

describe('ListorgansSpecificAnimalComponent', () => {
  let component: ListorgansSpecificAnimalComponent;
  let fixture: ComponentFixture<ListorgansSpecificAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListorgansSpecificAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListorgansSpecificAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
