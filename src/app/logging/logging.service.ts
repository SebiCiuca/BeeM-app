import { Client } from '../clients/client.model';

export class LoggingService {
  logClientAdded(client: Client) {
    console.log('A new client was added: ' + client.name);
  }

  logClientDeleted(client: Client) {
    console.log('A client was deleted: ' + client.name);
  }

  log(message: string) {
    console.log(message);
  }
}
