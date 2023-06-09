import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './modules/routing.module';
import { IconModule } from './modules/icon.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './components/main/main.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { IConfig, NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  patterns: {
    A: {
      pattern: new RegExp('[a-zA-Z0-9]'),
    },
    Q: {
      pattern: new RegExp('[a-zA-Z0-9]'),
      symbol: '*'
    }
  }
};
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    IconModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: "NgRx Immer",
    }),
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
