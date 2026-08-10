import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaturaDetalheComponent } from './criatura-detalhe.component';

describe('CriaturaDetalheComponent', () => {
  let component: CriaturaDetalheComponent;
  let fixture: ComponentFixture<CriaturaDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriaturaDetalheComponent]
    });
    fixture = TestBed.createComponent(CriaturaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
