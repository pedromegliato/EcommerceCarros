import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { InterfaceMainComponent } from './Layouts/interface-main/interface-main.component';
import { InterfaceHomeComponent } from './views/interface-home/interface-home.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PesquisaComponentComponent } from './components/pesquisa-component/pesquisa-component.component';
import { OfertaComponentComponent } from './components/oferta-component/oferta-component.component';
import { FiltrosComponentComponent } from './components/filtros-component/filtros-component.component';
import { InterfaceLoginCadastroComponent } from './views/interface-login-cadastro/interface-login-cadastro.component';
import { FormsModule } from '@angular/forms';
import { InterfaceAdminComponent } from './Layouts/interface-admin/interface-admin.component';
import { InterfaceDashboardComponent } from './views/admin/interface-dashboard/interface-dashboard.component';
import { InterfaceConfiguracaoComponent } from './views/admin/interface-configuracao/interface-configuracao.component';
import { InterfaceVeiculosComponent } from './views/admin/veiculos/interface-veiculos/interface-veiculos.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';





@NgModule({
  declarations: [
    InterfaceMainComponent,
    InterfaceHomeComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    PesquisaComponentComponent,
    OfertaComponentComponent,
    FiltrosComponentComponent,
    InterfaceLoginCadastroComponent,
    InterfaceAdminComponent,
    InterfaceDashboardComponent,
    InterfaceConfiguracaoComponent,
    InterfaceVeiculosComponent,
    SidebarComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [InterfaceMainComponent]
})
export class AppModule { }
