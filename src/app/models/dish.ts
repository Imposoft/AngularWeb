import {Allergen} from './allergen';

export interface Dish {
  id: string;
  name: string;
  description: string;
  allergens: Array<Allergen>;
  price: string;
}
