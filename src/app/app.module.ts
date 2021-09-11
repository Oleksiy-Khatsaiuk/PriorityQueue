import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { SharedModule } from './shared.module';
import { CoreService } from './core/services/core.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    MatSelectCountryModule.forRoot('de'),
    NoopAnimationsModule
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
