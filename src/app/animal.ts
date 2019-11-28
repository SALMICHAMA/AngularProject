import {Organ} from './organ';

export class Animal {
  id: number;
  name: string;
  environment: string;
  category: string;
  imageUrl: string;
  organs: Organ[];
  filter: string;
}
