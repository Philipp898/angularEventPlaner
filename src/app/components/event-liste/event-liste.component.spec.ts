import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListeComponent } from './event-liste.component';

describe('EventListeComponent', () => {
  let component: EventListeComponent;
  let fixture: ComponentFixture<EventListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
