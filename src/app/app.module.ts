import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayBindingComponent } from './bindings/one-way-binding/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './structure-directives/directives/directives.component';
import { PipesComponent } from './angular-pipes/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
