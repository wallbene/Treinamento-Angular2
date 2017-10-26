import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms'
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {
    
    foto: FotoComponent = new FotoComponent();
    fotoForm: FormGroup;
    fb: FormBuilder;
    service: FotoService;
    route: ActivatedRoute;
    router: Router
    
    constructor(fb: FormBuilder, service: FotoService, route: ActivatedRoute, router: Router){
        this.fb = fb;
        this.service = service;
        this.route = route;
        this.router = router;
        
        route.params.subscribe(
                (param) => {
                    const id = param["id"];

                    if(id){
                        this.service
                            .buscaPorId(id)
                            .subscribe(
                                foto => this.foto = foto,
                                erro => console.log(erro)
                            );
                        }
                    });
    }
    
    ngOnInit(): void {
        this.fotoForm = this.fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    public get titulo(){
        return this.fotoForm.get("titulo");
    }

    public get url(){
        return this.fotoForm.get("url");
    }


    public cadastrar(event: Event){
        event.preventDefault();
                this.service.cadastra(this.foto)
                 .subscribe((foto) => {
                    this.router.navigate(['']);
                     this.foto = new FotoComponent();
                     console.log("Foto enviada com sucesso!");
                 },
                  erro => console.error(erro));
    }

}