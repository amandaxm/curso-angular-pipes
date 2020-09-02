import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import LocalePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

registerLocaleData(LocalePt,'pt');
@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
   /*   { 
     provide: LOCALE_ID,
     useValue: 'pt-BR' 
    } */
    /* ATRAVES DE UM SERVIÇO */
    SettingsService,{
      provide: LOCALE_ID,
      deps:[SettingsService],
      useFactory:(settingsService)=>settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
