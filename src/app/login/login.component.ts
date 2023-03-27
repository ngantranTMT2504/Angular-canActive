import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastRef, ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  updatedata: any;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService,
    private route: Router
  ) {
    sessionStorage.clear();
  }

  loginForm = this.fb.group({
    username: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    password: this.fb.control('', Validators.required)
  })

  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.getByCode(this.loginForm.value.username).subscribe(res => {
        this.updatedata = res
        if (this.updatedata.password === this.loginForm.value.password) {
          sessionStorage.setItem('username', this.updatedata.id);
          this.route.navigate(['']);
        } else {
          this.toastr.warning("Your password isn't valid")
        }
      })
    }
  }
}


