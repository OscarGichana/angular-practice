import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader'; //it's a class
import { LEADERS } from '../shared/leaders'; //it's const


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLEADERS(): Leader[] {
    return LEADERS
  }
}
