import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterfaceHomeComponent } from './views/interface-home/interface-home.component';

const routes: Routes = [

  {path: '', component: InterfaceHomeComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
