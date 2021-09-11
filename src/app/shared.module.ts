import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatSelectCountryModule,
    ],
    exports: [
        // TranslateModule,
    ],
    declarations: [

    ],
    providers: [
    ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return { ngModule: SharedModule };
  }
}
