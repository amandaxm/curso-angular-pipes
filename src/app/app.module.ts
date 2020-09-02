import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import LocalePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SettingsService } from './settings.service';

registerLocaleData(LocalePt,'pt');
@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
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
