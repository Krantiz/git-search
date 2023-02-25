import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history.component';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HistoryComponent,
    SearchComponent,
    SearchResultComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
