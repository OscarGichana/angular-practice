import { Injectable } from '@angular/core';
import { FEATUREDS } from '../shared/featureds';

import { Leader } from '../shared/leader'; //it's a class
import { LEADERS } from '../shared/leaders'; //it's const



@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }


 
 //getLeaders(): Promise<Leader[]> {
    //return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
  //    setTimeout(() => resolve(LEADERS), 1000);
   // });  
 // }

  getLeader(id: string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }


  /*getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve=> { 
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 1000);
    });    
  }*/



  
}