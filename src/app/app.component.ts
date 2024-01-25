import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private fb = inject(FormBuilder);
  showEmoji: boolean = false;
  title = 'app-testing';
  subTitle = 'Estamos creando este ejercicio para comenzar a aprender sobre pruebas unitarias en componentes'
  contentEmoji = ''
  dataSession: any;
  form: FormGroup = new FormGroup({})
  isCheck: any;
  checkHuman: Array<any> = []

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  sendLogin(): void {
    this.isCheck = { user: 1 }
  }
}
