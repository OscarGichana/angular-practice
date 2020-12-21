import { Injectable } from '@angular/core';

import { Featured } from '../shared/featured';
import { FEATUREDS } from '../shared/featureds';


@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  constructor() { }

  getFEATUREDS


  getFeatured(): Promise<Featured[]> {
    return Promise.resolve(FEATUREDS);
  }


  /*getFeatured(id: string): Featured {
    return FEATUREDS.filter((featured) => (featured.id === id))[0];
  }*/

  getFeaturedFeatured(): Featured {
    return FEATUREDS.filter((featured) => featured.featured)[0];
  }
}