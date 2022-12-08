import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceAdminComponent } from './Layouts/interface-admin/interface-admin.component';
import { InterfaceConfiguracaoComponent } from './views/admin/interface-configuracao/interface-configuracao.component';
import { InterfaceDashboardComponent } from './views/admin/interface-dashboard/interface-dashboard.component';
import { InterfaceVeiculosComponent } from './views/admin/veiculos/interface-veiculos/interface-veiculos.component';

import { InterfaceHomeComponent } from './views/interface-home/interface-home.component';
import { InterfaceLoginCadastroComponent } from './views/interface-login-cadastro/interface-login-cadastro.component';

const routes: Routes = [

    {path: '', component: InterfaceHomeComponent},

    {path: 'iniciar', component: InterfaceLoginCadastroComponent},

    {
        path: 'admin',
        component: InterfaceAdminComponent,
        children: [
          { path: 'dashboard', component: InterfaceDashboardComponent },
          { path: 'veiculos', component: InterfaceVeiculosComponent },
          { path: 'configuracao', component: InterfaceConfiguracaoComponent},
          { path: "", redirectTo: "dashboard", pathMatch: "full" },

        ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
