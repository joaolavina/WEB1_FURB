import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFuncionariosComponent } from './app-funcionarios.component';

describe('AppFuncionariosComponent', () => {
  let component: AppFuncionariosComponent;
  let fixture: ComponentFixture<AppFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
