import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { BasicPageComponent } from './reactive/pages/basic-page/basic-page.component';

@NgModule({
  declarations: [AppComponent, RegisterPageComponent, BasicPageComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
