import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOrganComponent } from './single-organ.component';

describe('SingleOrganComponent', () => {
  let component: SingleOrganComponent;
  let fixture: ComponentFixture<SingleOrganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOrganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOrganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
