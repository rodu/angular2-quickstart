import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Dashboard } from './dashboard/dashboard.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    Dashboard
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
