import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CubosService } from 'src/app/services/cubos.service';
import { Comentario } from 'src/models/Comentario';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css'],
})
export class CuboComponent implements OnInit {
  public comentarios!: Array<Comentario>;
  public id!: string;
  constructor(
    private _servicio: CubosService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCommentarios()
  }

  getCommentarios() {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros['id'];
    });

    this._servicio.getComentario(this.id).subscribe(res => {
      this.comentarios = res;
    });
  }
}
