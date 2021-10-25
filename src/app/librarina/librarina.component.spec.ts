import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarinaComponent } from './librarina.component';

describe('LibrarinaComponent', () => {
  let component: LibrarinaComponent;
  let fixture: ComponentFixture<LibrarinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
