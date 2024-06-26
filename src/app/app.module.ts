import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ConvertDivisasComponent } from './components/convert-divisas/convert-divisas.component';
import { ConvertUnitsComponent } from './components/convert-units/convert-units.component';
import { MaterialModule } from './materials/material/material.module';
import { ToolbarGeneralComponent } from './components/toolbar-general/toolbar-general.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConvertDivisasComponent,
    ConvertUnitsComponent,
    ToolbarGeneralComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
