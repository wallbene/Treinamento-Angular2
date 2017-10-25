import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    private http: Http;
    fotoForm: FormGroup;

    constructor(http: Http, fb: FormBuilder){
        this.http = http;

        this.fotoForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event: Event){
        event.preventDefault();
        
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        this.http.post("v1/fotos", JSON.stringify(this.foto),{headers: headers})
                 .subscribe((foto) => {

                     this.foto = new FotoComponent();
                     console.log("Foto enviada com sucesso!");
                     console.log(foto.json());
                 },
                  erro => console.error(erro));
    }

}