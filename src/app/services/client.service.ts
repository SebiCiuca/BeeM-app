import { Injectable } from "@angular/core";
import { Client } from "../clients/client.model";
import { LoggingService } from "../logging/logging.service";

@Injectable()
export class ClientService {

    private readonly m_LoggingService: LoggingService;
    private _clients: Client[];

    constructor(logginService : LoggingService) {
        this._clients = [];
        this.m_LoggingService = logginService;
        this.mockClients();
    }

    add(client: Client) {
        this._clients.push(client);
    }

    get clients() : Client[] {
        this.m_LoggingService.log('get clients');
        return [].concat(this._clients);
    }

    remove(client: Client) {
        let index = this._clients.indexOf(client);
        if (index != -1) {
            this._clients.splice(index, 1);
        }
    }

    update(client: Client) {
        let index = this._clients.findIndex(c => c.id == client.id);
        if (index != -1) {
            this._clients[index] = client;
        }
    }

    mockClients(){
        this._clients = [
            new Client(1, 'Maria', 'maria.cochisa@gmail.com', 'Str. Padurii nr. 1'),
            new Client(2, 'Ion', 'ion.pop@yopmail', 'Str. Padurii nr. 2'),
            new Client(3, 'Vasile', 'vasile.pop@yopmail', 'Str. Padurii nr. 3'),
            new Client(4, 'Gheorghe', 'gheorghe.pop@yopmail', 'Str. Padurii nr. 4'),
            new Client(5, 'Mihai', 'mihai.pop@yopmail', 'Str. Padurii nr. 5'),
          ];
    }  
    
    getClientById(id: number): Client {
        console.log(id);
        let client: Client =  this._clients.find(c => c.id == id);

        console.log(client);

        return client;
    }
}