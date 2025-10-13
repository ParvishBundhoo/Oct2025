import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csvfileviewer } from './csvfileviewer';

describe('Csvfileviewer', () => {
  let component: Csvfileviewer;
  let fixture: ComponentFixture<Csvfileviewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csvfileviewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csvfileviewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
