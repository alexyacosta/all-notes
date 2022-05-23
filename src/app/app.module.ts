import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './views/tela-login/tela-login.component';
import { TelaInicialComponent } from './views/tela-inicial/tela-inicial.component';
import { TelaNotasComponent } from './views/tela-notas/tela-notas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaAudioComponent } from './views/tela-audio/tela-audio.component';
import { TelaFotosComponent } from './views/tela-fotos/tela-fotos.component';
import { TelaTraducaoComponent } from './views/tela-traducao/tela-traducao.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaInicialComponent,
    TelaNotasComponent,
    TelaAudioComponent,
    TelaFotosComponent,
    TelaTraducaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
