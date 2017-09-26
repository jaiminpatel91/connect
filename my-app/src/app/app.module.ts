import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app.header.component';
import { LeftPanelComponent } from './app.left_panel.component';
import { NewsFeedComponent } from './app.newsfeed.component';
import { ProfileComponent } from './app.profile.component';
import { FooterComponent } from './app.footer.component';

const appRoutes: Routes = [
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    NewsFeedComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
