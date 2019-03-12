import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistcompComponent } from './components/todolistcomp/todolistcomp.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodolistcompComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
