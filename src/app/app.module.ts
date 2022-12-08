import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


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


import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import { InterfaceMainComponent } from './Layouts/interface-main/interface-main.component';
import { InterfaceHomeComponent } from './views/interface-home/interface-home.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ModalComponent } from './components/modal/modal.component';
import { InterfaceAdminComponent } from './Layouts/interface-admin/interface-admin.component';
import { InterfaceDashboardComponent } from './views/admin/interface-dashboard/interface-dashboard.component';
import { InterfaceConfiguracaoComponent } from './views/admin/interface-configuracao/interface-configuracao.component';
import { InterfaceVeiculosComponent } from './views/admin/veiculos/interface-veiculos/interface-veiculos.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { InterfaceListVeiculosComponent } from './views/admin/veiculos/interface-list-veiculos/interface-list-veiculos.component';
import { InterfaceCadVeiculosComponent } from './views/admin/veiculos/interface-cad-veiculos/interface-cad-veiculos.component';
import { PesquisaComponentComponent } from './components/pesquisa-component/pesquisa-component.component';
import { OfertaComponentComponent } from './components/oferta-component/oferta-component.component';
import { FiltrosComponentComponent } from './components/filtros-component/filtros-component.component';
import { InterfaceLoginCadastroComponent } from './views/interface-login-cadastro/interface-login-cadastro.component';
import { LoginService } from './services/login/login.service';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AuthGuard } from './AuthGuard/auth.service';


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
    InterfaceListVeiculosComponent,
    InterfaceCadVeiculosComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
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
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,

  ],
  providers: [
    AuthGuard,
    // ModalService,
    LoginService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi : true,
    },
  ],
  bootstrap: [InterfaceMainComponent]
})
export class AppModule { }
