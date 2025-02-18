import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from '../shared/cuenta.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent {
  cuentasForm: FormGroup;

  cuentaService = inject(CuentaService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.cuentasForm = this.fb.group({
      identificador: ['urkoprueba', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      nuevoPassword: ['123456', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['123456', Validators.required],
      nombre: ['urko', Validators.required],
      apellido: ['urko', Validators.required],
      correo: ['urko@arima.eu', [Validators.required, Validators.email]],
      telefono: ['123456789', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      fecha: [new Date().toISOString().substring(0, 10), Validators.required],
      idioma: ['CASTELLANO', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('nuevoPassword');
    const confirmPassword = control.get('repetirPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  onSubmit(): void {
    if (this.cuentasForm.valid) {
      const guiaRapidaForm = this.formToGuiaRapidaForm(this.cuentasForm.value);
      console.log('Form submitted:', guiaRapidaForm);

      this.cuentaService.crearCuenta(guiaRapidaForm).subscribe({
        next: (data: any) => {
          this.router.navigateByUrl('');
        },
        error: (error: any) => {
          if (error.status === HttpStatusCode.BadRequest) {
            const errorMessage = error.error?.message || '';

            if (errorMessage.includes('correo already taken')) {
              this.cuentasForm.get('correo')?.setErrors({ serverError: 'Este correo ya está en uso' });
            }

            if (errorMessage.includes('identificador already taken')) {
              this.cuentasForm.get('identificador')?.setErrors({ serverError: 'Este identificador ya está en uso' });
            }
          } else if (error.status === HttpStatusCode.Forbidden) {
            this.router.navigateByUrl('/unauthorized');
          } else {
            console.error(error);
          }
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  formToGuiaRapidaForm(form: any) {
    const cuenta = {
      idUsuario: form.identificador,
      email: form.correo,
      nombre: form.nombre,
      apellido: form.apellido,
      telefono: +form.telefono,
      fcreacion: form.fecha,
      password: form.nuevoPassword,
      perfil: {
        idioma: form.idioma
      }
    };
    const cuentaForm = {
      repetirPassword: form.repetirPassword,
      cuenta
    };

    return cuentaForm;
  }
}
