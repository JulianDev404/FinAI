import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  showPassword = false;
  showConfirmPassword = false;

  onSubmit() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validar que todos los campos estén llenos
    if (!this.formData.name || !this.formData.email || !this.formData.password) {
      alert('Por favor completa todos los campos');
      return;
    }

    console.log('Form submitted:', this.formData);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
