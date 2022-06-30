import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyModule } from './featureModule/lazy/lazy.module';
import { DynamicComponent } from './Component/dynamic/dynamic.component';
import { AsyncComponent } from './Component/async/async.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LazyModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
