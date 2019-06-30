import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CreateseguridadComponent } from './create-seguridad/create-seguridad.component';
import { seguridadDetailsComponent } from './seguridad-details/seguridad-details.component';
import { seguridadListComponent } from './seguridad-list/seguridad-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreateseguridadComponent,
    seguridadDetailsComponent,
    seguridadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }