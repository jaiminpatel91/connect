import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './app.login.component';
import { MainService } from './app.main.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app.header.component';
import { LeftPanelComponent } from './app.left_panel.component';
import { NewsFeedComponent } from './app.newsfeed.component';
import { ProfileComponent } from './app.profile.component';
import { FooterComponent } from './app.footer.component';
import { NotificationComponent } from './app.notification.component';
import { SettingComponent } from './app.setting.component';
import { FriendsComponent } from './app.friends.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/newsfeed', pathMatch: 'full'},
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'friends', component: FriendsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LeftPanelComponent,
    NewsFeedComponent,
    ProfileComponent,
    FooterComponent,
    NotificationComponent,
    SettingComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
      RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
