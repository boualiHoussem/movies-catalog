import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuModule} from './menu/menu.module';
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {appReducer} from "./state/app.state";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
