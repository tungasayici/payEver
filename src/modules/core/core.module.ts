import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    console.log('CoreModule created');
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
      ]
    }
  }
}
export {ApiService} from './services/api.service';