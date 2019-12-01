export class Organ {
  id: number;
  name: string;
  vital: boolean;
  description: string;
  constructor( private createname: string, private createdescription: string, private createvital: boolean) {
    this.name = createname;
    this.description = createdescription;
    this.vital = createvital;
  }
}
