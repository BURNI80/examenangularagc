import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas!:[]
  constructor( private _servicio:CubosService ) { }

  ngOnInit(): void {
    this._servicio.getMarcas().subscribe(res => {
      this.marcas = res
    })
  }

}
