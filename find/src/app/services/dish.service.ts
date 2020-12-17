import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'; //it's a class
import { DISHES } from '../shared/dishes'; //it's const

@Injectable()
export class DishService {

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
  
}