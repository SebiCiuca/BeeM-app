import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  Client : Client;

  constructor(private readonly m_ActivatedRoute : ActivatedRoute,
    private readonly m_ClientService : ClientService) {

  }

  ngOnInit() {
    this.m_ActivatedRoute.params.subscribe(
      (params) => {
        this.Client = this.m_ClientService.getClientById(params['id']);
      }
    );
  }
}
