import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CountryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    InputTextModule,
    DialogModule,
    ButtonModule,
    TabViewModule,

		CheckboxModule,
		RadioButtonModule,
		InputTextareaModule,
    DropdownModule,
    AccordionModule,
    CalendarModule,
    TableModule,
    ToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
