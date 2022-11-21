import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public perfil!:any
  constructor(private _servicio: CubosService) { }

  ngOnInit(): void {
    this._servicio.getPerfil().subscribe(res => {
      this.perfil = res;
  })
  }

}
