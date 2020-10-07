import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {CovalentLayoutModule} from '@covalent/core';
import {CovalentSearchModule} from '@covalent/core';
import {CovalentMediaModule} from '@covalent/core';
import {CovalentMenuModule} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';
import { CovalentCommonModule } from '@covalent/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentCommonModule,
    CovalentHttpModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class PlunkerAppModule {}

platformBrowserDynamic().bootstrapModule(PlunkerAppModule);