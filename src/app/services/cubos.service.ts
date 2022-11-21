import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CubosService {
  constructor(private _http: HttpClient) {}

  getMarcas(): Observable<any> {
    const req = '/api/Cubos/Marcas';
    return this._http.get(environment.url + req);
  }

  getCubos(): Observable<any> {
    const req = '/api/Cubos';
    return this._http.get(environment.url + req);
  }

  getCubosMarca(marca: string): Observable<any> {
    const req = '/api/Cubos/CubosMarca/';
    return this._http.get(environment.url + req + marca);
  }

  login(email: string, pass: string): Observable<any> {
    const req = '/api/Manage/Login';
    var data = {
      email: email,
      password: pass,
    };
    return this._http.post(environment.url + req, data);
  }

  registro(nombre: string, email: string, pass: string): Observable<any> {
    const req = '/api/Manage/RegistroUsuario';
    var data = {
      idUsuario: 0,
      nombre: nombre,
      email: email,
      pass: pass,
    };
    return this._http.post(environment.url + req, data);
  }

  getComentario(id: string): Observable<any> {
    const req = '/api/ComentariosCubo/GetComentariosCubo/';
    return this._http.get(environment.url + req + id);
  }

  getPerfil(): Observable<any> {
    const req = '/api/Manage/PerfilUsuario';
    var token = localStorage.getItem('token');
    var headers = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return this._http.get(environment.url + req, headers);
  }

  getCompras(): Observable<any> {
    const req = '/api/Compra/ComprasUsuario';
    var token = localStorage.getItem('token');
    var headers = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return this._http.get(environment.url + req, headers);
  }

  comprar(id: string): Observable<any> {
    const req = '/api/Compra/InsertarPedido/';
    var token = localStorage.getItem('token');
    var headers = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    var data = {};
    return this._http.post(environment.url + req + id, data, headers);
  }
}
