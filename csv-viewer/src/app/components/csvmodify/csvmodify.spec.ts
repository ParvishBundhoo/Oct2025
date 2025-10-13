import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csvmodify } from './csvmodify';

describe('Csvmodify', () => {
  let component: Csvmodify;
  let fixture: ComponentFixture<Csvmodify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csvmodify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csvmodify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
