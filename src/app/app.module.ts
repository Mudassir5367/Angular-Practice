import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayBindingComponent } from './bindings/one-way-binding/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './structure-directives/directives/directives.component';
import { PipesComponent } from './angular-pipes/pipes/pipes.component';
import { PracticeService } from './services/practice.service';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive-form/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    PipesComponent,
    TemplateDrivenComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    PracticeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
