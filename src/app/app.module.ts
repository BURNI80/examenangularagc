import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './components/home/home.component';
import { ZonaseguridadComponent } from './components/zonaseguridad/zonaseguridad.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CuboComponent } from './components/cubo/cubo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    MenuComponent, ZonaseguridadComponent, PerfilComponent, LoginComponent, ComprasComponent, ComprarComponent, RegistroComponent, CuboComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
