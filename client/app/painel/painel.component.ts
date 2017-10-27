import { Component, Input, OnInit, ElementRef  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "painel",
    templateUrl: "./painel.component.html",
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{

    elemento: ElementRef;
    @Input() titulo: string;

    constructor(elemento: ElementRef){
        this.elemento = elemento;
    }


    
    ngOnInit(): void {
        this.titulo = 
        this.titulo.length > 11? `${this.titulo.substring(0, 11)}...`
        : this.titulo;
    }

    fadeOut(cb){
        $(this.elemento.nativeElement).fadeOut(cb);
    }


}