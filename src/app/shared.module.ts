import {ModuleWithProviders, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
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
