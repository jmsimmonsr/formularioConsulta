import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerDatosComponent } from './componentes/ver-datos/ver-datos.component';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    VerDatosComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  exports :[VerDatosComponent]
})
export class GuateComprasModule { }
