import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltraPorTitulo } from './foto.pipe';
import { FotoService } from './foto.service';

@NgModule({
    declarations: [FotoComponent, FiltraPorTitulo],
    exports: [FotoComponent, FiltraPorTitulo],
    providers: [FotoService]
})
export class FotoModule { }
