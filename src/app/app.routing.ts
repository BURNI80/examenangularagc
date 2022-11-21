
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ZonaseguridadComponent } from "./components/zonaseguridad/zonaseguridad.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ComprasComponent } from "./components/compras/compras.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { CuboComponent } from "./components/cubo/cubo.component";
import { ComprarComponent } from "./components/comprar/comprar.component";
const appRoutes: Routes = [
    {
        path:"", component: HomeComponent
    },
    {
        path:":marca", component: HomeComponent
    },
    {
        path:"cubos/login", component: LoginComponent
    },
    {
        path:"cubos/zonasegura", component: ZonaseguridadComponent
    },
    {
        path:"cubos/perfil", component:PerfilComponent
    },
    {
        path:"cubos/compras", component:ComprasComponent
    },
    {
        path:"cubos/comprar/:id", component:ComprarComponent
    },
    {
        path:"cubos/comprar", component:ComprarComponent
    },
    {
        path:"cubos/registro", component:RegistroComponent
    },
    {
        path:"cubo/:id", component:CuboComponent,
    },
    
    
]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);