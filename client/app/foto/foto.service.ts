import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FotoComponent } from './foto.component';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {
    
    private http: Http;
    private url: string = "v1/fotos";
    private headers: Headers;
    
    constructor(http: Http){
        this.http = http;
        
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    
    listar(): Observable<FotoComponent[]> {
        
        return this.http.get(this.url)
                        .map(res => res.json());
        
    }

    buscaPorId(id: string): Observable<FotoComponent> {
        return this.http.get(this.url + "/" + id)
                        .map(res => res.json());
    }
    
    cadastra(foto: FotoComponent): Observable<Response> {
        
        const fotoJson =JSON.stringify(foto);
        const headers = {headers: this.headers};

        if(foto._id){
            return this.http.put(
                this.url+"/"+foto._id,
                fotoJson,
                headers
            );    
        }else{

            return this.http.post(
                this.url,
                fotoJson,
                headers
            );
        }
    }
    
    remove(foto: FotoComponent): Observable<Response> {
       return this.http.delete(this.url+"/"+foto._id);
    }
}