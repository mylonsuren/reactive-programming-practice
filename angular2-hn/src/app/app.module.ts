import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { HackerNewsAPIService } from './hackernews-api.service';
import { DomainPipe } from './domain.pipe';
import { ItemCommentsComponent } from './item-comments/item-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent
  ],
  imports: [
    BrowserModule, HttpModule, routing
  ],
  providers: [HackerNewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
