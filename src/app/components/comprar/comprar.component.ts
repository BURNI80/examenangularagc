import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  // @ViewChild('id') id: ElementRef = {} as ElementRef;
  public id!:string
  constructor(private _servicio: CubosService,private router: Router,private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")== undefined){
      this.router.navigate(['cubos/login'])
    }
    this._activeRoute.params.subscribe((parametros: Params)=>{
      if (parametros['id'] != undefined){
        this.id = parametros['id']
      }
    })

  }
  comprar(){
    this._servicio.comprar(this.id).subscribe(res => {
        res;
        this.router.navigate(['cubos/zonasegura'])

    })
}

}
