import {Dish} from './dish';

export interface Section {
  id: string;
  name: string;
  description: string;
  dishes: Array<Dish>;
}
