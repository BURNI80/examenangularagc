import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('nombre') nombre: ElementRef = {} as ElementRef;
  @ViewChild('email') email: ElementRef = {} as ElementRef;
  @ViewChild('pass') pass: ElementRef = {} as ElementRef;
  constructor(private _servicio: CubosService,private router: Router) { }

  ngOnInit(): void {

  }
  registro(){
    this._servicio.registro(this.nombre.nativeElement.value,this.email.nativeElement.value,this.pass.nativeElement.value).subscribe(res => {
      res;
      this.router.navigate(['cubos/login'])
  })
  }

}
