import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TicTacToeComponent } from './tic-tac-toe.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TicTacToeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
