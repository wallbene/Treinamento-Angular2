import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = '';
    @Input() tipo: string = 'button';
    @Input() estilo: string = 'btn btn-default';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean = false;

    executaAcao(){
        if(this.confirmacao){
            if(confirm("Deseja remover esta foto?")){
                this.acao.emit(null);
            }
            return;
        }else{
            this.acao.emit(null);
        }
    }

}