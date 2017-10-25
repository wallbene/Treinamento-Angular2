import { Component, Input, OnInit,  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "painel",
    templateUrl: "./painel.component.html"
})
export class PainelComponent implements OnInit{
    
    @Input() titulo: string;
    
    ngOnInit(): void {
        this.titulo = 
        this.titulo.length > 11? `${this.titulo.substring(0, 11)}...`
        : this.titulo;
    }


}