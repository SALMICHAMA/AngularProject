import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalstodisplayComponent } from './animalstodisplay.component';

describe('AnimalstodisplayComponent', () => {
  let component: AnimalstodisplayComponent;
  let fixture: ComponentFixture<AnimalstodisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalstodisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalstodisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
