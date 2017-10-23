import { Component, Inject } from "@angular/core";
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    fotos: Object[];

    constructor(@Inject(Http) http: Http){

        http.get("v1/fotos")
            .map(res => res.json())
            .subscribe(res => {
                
                    this.fotos = res;
                    console.log(this.fotos);

            }, err => console.log(err));
    }

}