import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    route: ActivatedRoute;
    service: FotoService;
    mensagem: string = '';
    fotos: FotoComponent[] = [];
    
        constructor(service: FotoService, route: ActivatedRoute){
            
            this.route = route;
            this.service = service;

            route.params.subscribe(param => {
                const msg = param['mensagem'];
                if(msg)
                    this.mensagem = msg;
            });

            service.listar()
                .subscribe(fotos => {
                        this.fotos = fotos;
                        
                }, err => console.log(err));
        }

        remover(foto: FotoComponent): void {

            this.service.remove(foto)
                        .subscribe(
                            () => {
                                this.mensagem = `Foto ${foto.titulo} Removida com sucesso`;
                                let cloneArray = this.fotos.slice(0);
                                let index = this.fotos.indexOf(foto);
                                cloneArray.splice(index, 1);
                                this.fotos = cloneArray;
                            }
                            , erro => console.log(erro)
                    );
        }

}