import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModule } from './botao/botao.modulo';
import { ModalModule } from './modal/modal.module';

@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule,
        ModalModule
    ],
    declarations: [AppComponent, ListagemComponent, CadastroComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}