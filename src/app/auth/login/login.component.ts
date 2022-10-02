import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.buildForm();

  }

  public OnIniciarSeccion() {
    const value = this.addForm.value;
    const usuario = this.addForm.get('usuario')!.value
    const contrasena = this.addForm.get('contrasena')!.value
    console.log(value);
  }

  public fieldIsValidReactive(field:string){  //interesante
    return this.addForm.controls[field].errors && this.addForm.controls[field].touched
  }


  public buildForm() {
    const controls = {
      usuario: ['dlp@gm.v', [Validators.required,Validators.email]],
      contrasena: ['', [Validators.required,Validators.minLength(3)]],
    };
    this.addForm = this.formBuilder.group(controls);
  }
}


// 01:28 video 04
