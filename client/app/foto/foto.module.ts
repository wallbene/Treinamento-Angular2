import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltraPorTitulo } from './foto.pipe';

@NgModule({
    declarations: [FotoComponent, FiltraPorTitulo],
    exports: [FotoComponent, FiltraPorTitulo]
})
export class FotoModule {

}
