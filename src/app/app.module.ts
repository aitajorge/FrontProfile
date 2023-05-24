import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezaComponent } from './componentes/encabeza/encabeza.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClientModule} from  '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SocialComponent } from './componentes/social/social.component';
import { AcercaDComponent } from './componentes/acerca-d/acerca-d.component'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilComponent } from './componentes/habil/habil.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezaComponent,
    BannerComponent,
    HeaderComponent,
    ExperienciaComponent,
    SocialComponent,
    AcercaDComponent,
    HabilComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
