import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { ModalComponent } from './modal/modal.component';
import { SafeHtml } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FormsComponent,
    ModalComponent,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
