/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlenderComponent } from './blender.component';

describe('BlenderComponent', () => {
  let component: BlenderComponent;
  let fixture: ComponentFixture<BlenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
