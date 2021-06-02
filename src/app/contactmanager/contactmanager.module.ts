import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactmanagerAppComponent} from './contactmanager-app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {MaterialModule} from '../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactmanagerRoutingModule} from './contactmanager-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ContactmanagerRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }
