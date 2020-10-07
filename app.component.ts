import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'covalent-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer) {
                
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));

  }
}

