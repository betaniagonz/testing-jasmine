import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('(1) test del componente principal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, ReactiveFormsModule, FormsModule],
    declarations: [AppComponent]
  }).compileComponents());

  it('Debe crear el componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Debe tener el titulo: 'app-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-testing');
  });

  it('Debe retornar formulario inválido', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const form = app.form;
    const email = app.form.controls['email'];
    email.setValue('example@gmail.com');

    expect(form.invalid).toBeTrue();
  })

  it('Debe retornar formulario válido', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.form.controls['email'];
    const password = app.form.controls['password'];

    email.setValue('example@gmail.com');
    password.setValue('123456')

    expect(app.form.invalid).toBeFalse();
  })

  it('Debe de actualizar datos de usuario', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const email = app.form.controls['email'];
    const password = app.form.controls['password'];
    email.setValue('example@gmail.com');
    password.setValue('123456');

    const btnElement = fixture.debugElement.query(By.css('button.btn'));
    btnElement.nativeElement.click();
    const testData = { user: 1 };
    expect(app.isCheck).toEqual(testData);
  })
});
