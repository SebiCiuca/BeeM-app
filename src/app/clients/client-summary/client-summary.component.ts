import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Client } from '../client.model';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html',
  styleUrls: ['./client-summary.component.css'],
})
export class ClientSummaryComponent implements OnInit {
  @Input('clientSummary') public client: Client;
  @Output() clientDeleted = new EventEmitter<Client>();
  @Output() clientEdited = new EventEmitter<Client>();

  constructor(private readonly m_ActivatedRoute: ActivatedRoute, private readonly m_Router: Router) {
  }

  ngOnInit() {}

  onDelete() {
    console.log('delete');
    this.clientDeleted.emit(this.client);
  }
  onEdit() {
    this.m_Router.navigate([this.client.id], { relativeTo: this.m_ActivatedRoute } );
  }
  onTest() {
    console.log('test'  + this.client.id);
  }
}
