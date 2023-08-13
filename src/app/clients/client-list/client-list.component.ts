import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { LoggingService } from 'src/app/logging/logging.service';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [],
})
export class ClientListComponent implements OnInit {
  clients: Client[];

  constructor(private readonly m_LoggingService: LoggingService, 
    private readonly m_ClientService: ClientService, 
    private readonly m_Router: Router,
    private readonly m_ActivatedRoute: ActivatedRoute) {
  
  }

  ngOnInit(): void {
    this.clients = this.m_ClientService.clients;
  }

  onClientEdited(client: Client) {
    console.log(client);
  }
  onClientDeleted(client: Client) {
    this.clients.splice(this.clients.indexOf(client), 1);
    this.m_LoggingService.logClientDeleted(client);
  }

  viewClient(client: Client) {
    this.m_Router.navigate([ client.id], { relativeTo: this.m_ActivatedRoute });
  }
}
