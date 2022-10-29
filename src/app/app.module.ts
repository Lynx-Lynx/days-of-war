import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UaComponent } from 'src/app/components/ua/ua.component';
import { EnComponent } from 'src/app/components/en/en.component';

@NgModule({
  declarations: [
    AppComponent,
    UaComponent,
    EnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
