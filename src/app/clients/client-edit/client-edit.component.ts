import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from '../client.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
})
export class ClientEditComponent implements OnInit {
  private m_ClientService: ClientService;
  Client: Client;

  constructor(clientService: ClientService,private route: ActivatedRoute) {
    this.m_ClientService = clientService;
  }
  
  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      console.log("This was called");
      let id : number = +params['id'];
      this.Client = this.m_ClientService.getClientById(id);
    });
  }
}
