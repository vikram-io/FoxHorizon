// modify this to point to different versions (an empty string '' would mean latest)
let angularVer = '@4.1.1';
let materialVer = '@2.0.0-beta.5';
let covalentVer = '@1.0.0-beta.4';
let rxjsVer = '@5.2.0'

/** Add Transpiler for Typescript */
System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  packages: {
    '.': {
      defaultExtension: 'ts'
    },
    'vendor': {
      defaultExtension: 'js'
    }
  }
});

System.config({
  map: {
    'main': 'main.js',
    
    // Angular specific mappings.
    '@angular/animations': 'https://unpkg.com/@angular/animations'+ angularVer +'/bundles/animations.umd.js',
    '@angular/animations/browser': 'https://unpkg.com/@angular/animations'+ angularVer +'/bundles/animations-browser.umd.js',
    '@angular/core': 'https://unpkg.com/@angular/core'+ angularVer +'/bundles/core.umd.js',
    '@angular/common': 'https://unpkg.com/@angular/common'+ angularVer +'/bundles/common.umd.js',
    '@angular/compiler': 'https://unpkg.com/@angular/compiler'+ angularVer +'/bundles/compiler.umd.js',
    '@angular/http': 'https://unpkg.com/@angular/http'+ angularVer +'/bundles/http.umd.js',
    '@angular/forms': 'https://unpkg.com/@angular/forms'+ angularVer +'/bundles/forms.umd.js',
    '@angular/router': 'https://unpkg.com/@angular/router'+ angularVer +'/bundles/router.umd.js',
    '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser'+ angularVer +'/bundles/platform-browser.umd.js',
    '@angular/platform-browser/animations': 'https://unpkg.com/@angular/platform-browser'+ angularVer +'/bundles/platform-browser-animations.umd.js',
    '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic'+ angularVer +'/bundles/platform-browser-dynamic.umd.js',
    
    // Material specific mappings
    '@angular/material': 'https://unpkg.com/@angular/material'+ materialVer +'/bundles/material.umd.js',
    
    // Covalent specific mappings.
    '@covalent/core': 'https://unpkg.com/@covalent/core'+ covalentVer +'/core.umd.js',
    '@covalent/http': 'https://unpkg.com/@covalent/http'+ covalentVer +'/http.umd.js',

    // Rxjs mapping
    'rxjs': 'https://unpkg.com/rxjs' + rxjsVer,
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': { main: 'index' },
  }
});