import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zonaseguridad',
  templateUrl: './zonaseguridad.component.html',
  styleUrls: ['./zonaseguridad.component.css']
})
export class ZonaseguridadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['cubos/login'])

  }

}
