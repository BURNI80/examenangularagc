import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Compra } from 'src/models/Compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  public compras!:Array<Compra>
  constructor(private _servicio: CubosService,) { }

  ngOnInit(): void {
    this._servicio.getCompras().subscribe(res => {
      this.compras = res;
  });
  }

}
