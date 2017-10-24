import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';

@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing],
    declarations: [AppComponent, ListagemComponent, CadastroComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}