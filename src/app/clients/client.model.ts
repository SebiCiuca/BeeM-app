export class Client {
   public id: number;
   public name: string;
   public email: string;
   public address: string;

    constructor(id: number, name: string, email: string, address: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
}