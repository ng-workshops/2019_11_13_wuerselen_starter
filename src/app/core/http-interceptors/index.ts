/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { TimezoneInterceptor } from './timezone-interceptor';
import { TrimInterceptor } from './trim-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TrimInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TimezoneInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  // { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
];
