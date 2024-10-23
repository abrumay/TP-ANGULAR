
import { NgModule } from '@angular/core'; // Asegúrate de que esta línea está presente
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent
    // Tus componentes aquí
  ],
  imports: [BrowserModule,
    HttpClientModule,
    // Otros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }