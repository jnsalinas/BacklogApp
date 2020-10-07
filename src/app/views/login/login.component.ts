import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      var objectUser = this.loginForm.value;

      if (this.loginForm.controls.username.value == "administrador@unipanamericana.edu.co") {
        objectUser.isAdmin = true;
      } else {
        objectUser.isAdmin = false;
      }
      debugger;
      localStorage.setItem("userInformation", JSON.stringify(objectUser));
      this.router.navigate(['/dashboard']);
    }
  }
}
