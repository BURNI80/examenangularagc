import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubo } from 'src/models/Cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;

  constructor(
    private _servicio: CubosService,
    private _activeRoute: ActivatedRoute,
  ) 
  {
   
  }

  ngOnInit(): void {
    
    this._activeRoute.params.subscribe(( parametros: Params ) => {
      this.marca = (parametros['marca'])
      this.cargarCubos();
    })
  }

  cargarCubos() {
    if (this.marca == undefined) {
      this._servicio.getCubos().subscribe((res) => {
        this.cubos = res;
      });
    } else {
      this._servicio.getCubosMarca(this.marca).subscribe((res) => {
        this.cubos = res;

    });
    }
  }
}
