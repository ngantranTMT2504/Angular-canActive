import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  

  constructor( 
    private fb : FormBuilder,
    private toastr : ToastrService,
    private service: AuthService,
    private route : Router
    ){}

    registerForm = this.fb.group({
      id : this.fb.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
      name : this.fb.control('', Validators.required),
      password : this.fb.control('', Validators.compose([Validators.required])),
      email : this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      gender : this.fb.control('male'),
      role: this.fb.control(""),
      isactive: this.fb.control(false)
    })
  
  getError(){
    return
  }

  proceedregisteration() {
    if( this.registerForm.valid){
      this.service.proceedRegister(this.registerForm.value).subscribe(res => {
        this.toastr.success('Registered successfully');
        this.route.navigate(['login']);
      })
    }else{
      this.toastr.error('Please enter valid data');
    }
  }

}
