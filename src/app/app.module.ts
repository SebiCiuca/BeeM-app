import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './clients/client/client.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientSummaryComponent } from './clients/client-summary/client-summary.component';
import { ClientService } from './services/client.service';
import { LoggingService } from './logging/logging.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  {
    path: 'clients',
    component: ClientsComponent,
    children: [
      { path: ':id', component: ClientComponent },
      { path: ':id/edit', component: ClientEditComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    ClientEditComponent,
    ClientListComponent,
    ClientsComponent,
    ClientSummaryComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbCollapseModule,
    NgbModule,
  ],
  providers: [LoggingService, ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
