import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Usuario } from 'src/app/model/usuario/usuario';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  error="";
  returnUrl:String;
  loading=false;
  submitted=false;

  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private service:AuthenticationService,
    private router:Router
  ) { 
    if (this.service.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get usuario(){
    return this.loginForm.get('usuario');
  }

  get password(){
    return this.loginForm.get('password');
  }

  submitHandler(){
    this.submitted = true;
    this.loading = true;
    var usuarioLogin = new Usuario(this.loginForm.value);
    this.service.login(usuarioLogin)
      .pipe(first())
      .subscribe(
        data=>{
          this.router.navigate([this.returnUrl]);
        },
        error=>{
          this.error = "Contraseña o  usuario erroneos";
          this.loading = false;
        }
      );
  }

}
