import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('email') email: ElementRef = {} as ElementRef;
  @ViewChild('pass') pass: ElementRef = {} as ElementRef;
  constructor(private _servicio: CubosService,private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("token") != undefined) {
      this.router.navigate(['cubos/zonasegura'])
    }
  }


    login() {
      this._servicio.login(this.email.nativeElement.value, this.pass.nativeElement.value).subscribe(res => {
        var token = res.response
        localStorage.setItem("token",token)
        this.router.navigate(['cubos/zonasegura'])
      });
  
  }
}
