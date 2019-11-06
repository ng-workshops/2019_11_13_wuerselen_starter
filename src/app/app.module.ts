import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslateCompiler,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import ngx-translate-messageformat-compiler
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// App Root
import { AppComponent } from './app.component';
// Shared Services
import { CoreModule } from './core/core.module';
import { httpInterceptorProviders } from './core/http-interceptors';
import { CustomersModule } from './customers/customers.module';
// Feature Modules
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

// the second parameter 'de' is optional
registerLocaleData(localeDe, 'de');

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ProductsModule,
    CustomersModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      // compiler configuration
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  declarations: [AppComponent],
  providers: [httpInterceptorProviders, { provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/ngx-translate/');
}
