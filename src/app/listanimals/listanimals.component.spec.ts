import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanimalsComponent } from './listanimals.component';

describe('ListanimalsComponent', () => {
  let component: ListanimalsComponent;
  let fixture: ComponentFixture<ListanimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListanimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
