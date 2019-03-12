import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistcompComponent } from './todolistcomp.component';

describe('TodolistcompComponent', () => {
  let component: TodolistcompComponent;
  let fixture: ComponentFixture<TodolistcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
