/** Default AngularCLI component file. */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaComponent } from './wikipedia.component';

describe('WikipediaComponent', () => {
  let component: WikipediaComponent;
  let fixture: ComponentFixture<WikipediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikipediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
