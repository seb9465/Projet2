import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrerPartieSoloComponent } from './enregistrer-partie-solo.component';

describe('EnregistrerPartieSoloComponent', () => {
  let component: EnregistrerPartieSoloComponent;
  let fixture: ComponentFixture<EnregistrerPartieSoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrerPartieSoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrerPartieSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
