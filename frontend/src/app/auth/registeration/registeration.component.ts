import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'personal-task-manager-registeration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css',
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
}
