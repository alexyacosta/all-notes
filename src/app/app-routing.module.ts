import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaAudioComponent } from './views/tela-audio/tela-audio.component';
import { TelaFotosComponent } from './views/tela-fotos/tela-fotos.component';
import { TelaInicialComponent } from './views/tela-inicial/tela-inicial.component';
import { TelaLoginComponent } from './views/tela-login/tela-login.component';
import { TelaNotasComponent } from './views/tela-notas/tela-notas.component';
import { TelaNovaNotaComponent } from './views/tela-nova-nota/tela-nova-nota.component';
import { TelaTraducaoComponent } from './views/tela-traducao/tela-traducao.component';

const routes: Routes = [
  {path: '', component: TelaLoginComponent},
  {path: 'tela-inicial', component: TelaInicialComponent},
  {path: 'tela-notas', component: TelaNotasComponent},
  {path: 'tela-nova-nota', component: TelaNovaNotaComponent},
  {path: 'tela-audio', component: TelaAudioComponent},
  {path: 'tela-fotos', component: TelaFotosComponent},
  {path: 'tela-traducao', component: TelaTraducaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
