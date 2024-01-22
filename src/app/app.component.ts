import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  loginF = new FormGroup({
    hoten: new FormControl('John', [Validators.required, Validators.maxLength(25)]),
    diachi: new FormControl('Ha Noi'), 
    sdt: new FormControl('+84', [Validators.required, Validators.pattern('^0[0-9]+$')]),
    email: new FormControl('John@gmail.com', [Validators.required, Validators.email]),
    cmnd: new FormControl('your identity number....', [Validators.required, Validators.pattern('^[0-9]+$')]),
  });

  isControlInvalid(controlName: string): boolean {
    const control = this.loginF.get(controlName);
    return control !== null && control?.invalid && (control?.touched || control?.dirty);
  }

  isFormValid(): boolean {
    return this.loginF.valid;
  }

  onSubmit() {
    if (this.isFormValid()) {
  
    }
  }
}
