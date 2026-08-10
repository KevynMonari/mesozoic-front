import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosseisRegioesComponent } from './fosseis-regioes.component';

describe('FosseisRegioesComponent', () => {
  let component: FosseisRegioesComponent;
  let fixture: ComponentFixture<FosseisRegioesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FosseisRegioesComponent]
    });
    fixture = TestBed.createComponent(FosseisRegioesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
