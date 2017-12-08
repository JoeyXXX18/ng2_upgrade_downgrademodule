import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeModule, downgradeComponent, setAngularLib } from '@angular/upgrade/static';
import { environment } from './environments/environment';
import {
  AppModule
} from './app/app.module';
import { AddPinComponent } from './app/add-pin/add-pin.component';
import './js/app';
import './js/test.controller.js';

declare var angular: any;

const bootstrapFn = (extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  return platformRef.bootstrapModule(AppModule);
};

const downgradedModule = downgradeModule(bootstrapFn);

angular.module('ngInterestApp', ['interestApp', downgradedModule]).directive('addPin', downgradeComponent({ component: AddPinComponent }));


// if (environment.production) {
//   enableProdMode();
// }

// /*
//  * Bootstrap the App
//  */
// upgradeAdapter.bootstrap(document.body, ['interestApp']);

// // -----------------
// // (ignore this, sorry)
// // HACK: horrible workaround for AoT bootstrap detection bug
// // https://github.com/angular/angular-cli/issues/3540#issuecomment-270627460
// const hackThis = false;
// if (hackThis) {
//   platformBrowserDynamic().bootstrapModule(AppModule);
// }
angular.bootstrap(document.body, ['ngInterestApp']);