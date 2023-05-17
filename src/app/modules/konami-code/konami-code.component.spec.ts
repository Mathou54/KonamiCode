import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KonamiCodeComponent} from './konami-code.component';

describe('KonamiCodeComponent', () => {
  let component: KonamiCodeComponent;
  let fixture: ComponentFixture<KonamiCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KonamiCodeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonamiCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be valid after init', () => {
    component.ngOnInit();

    expect(component.isCodeActivated).toBeFalsy();
  });

  it('should not be valid after valid key', () => {
    component.ngOnInit();

    KonamiCodeComponent.KONAMI_CODE.forEach(code => {
      component.handleKeyboardEvent({key: code} as KeyboardEvent);
    });

    expect(component.isCodeActivated).toBeTruthy();
  });

  it('should not be valid after valid key uppercase', () => {
    component.ngOnInit();

    KonamiCodeComponent.KONAMI_CODE.forEach(code => {
      component.handleKeyboardEvent({key: code.toUpperCase()} as KeyboardEvent);
    });
  });

  it('should not be valid after valid key lowercase', () => {
    component.ngOnInit();

    KonamiCodeComponent.KONAMI_CODE.forEach(code => {
      component.handleKeyboardEvent({key: code.toLowerCase()} as KeyboardEvent);
    });

    expect(component.isCodeActivated).toBeTruthy();
  });

  it('should not be invalid after valid key then invalid code', () => {
    component.ngOnInit();

    KonamiCodeComponent.KONAMI_CODE.forEach(code => {
      component.handleKeyboardEvent({key: code} as KeyboardEvent);
    });
    component.handleKeyboardEvent({key: 'a'} as KeyboardEvent);

    expect(component.isCodeActivated).toBeFalsy();
  });
});
