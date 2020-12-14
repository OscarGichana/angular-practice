import { Component, OnInit } from '@angular/core';
import { Dishdetail } from '../shared/dishdetail';


const DISH = {
  id: '0',
  name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  featured: true,
  label: 'Hot',
  price: '4.99',
  // tslint:disable-next-line:max-line-length
  description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
  comments: [
       {
           rating: "5 Stars",
           comment: 'Imagine all the eatables, living in conFusion!',
           author: 'John Lemon',
           date: 'Oct 17,2012'
       },
       {
           rating: "4 Stars",
           comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
           author: 'Paul McVites',
           date: 'Sep 6.2014'
       },
       {
           rating: "3 Stars",
           comment: 'Eat it, just eat it!',
           author: 'Michael Jaikishan',
           date: 'Feb 14, 2015'
       },
       {
           rating: "4 Stars",
           comment: 'Ultimate, Reaching for the stars!',
           author: 'Ringo Starry',
           date: 'Dec 3, 2013'
       },
       {
           rating: "2 Stars",
           comment: 'It\'s your birthday, we\'re gonna party!',
           author: '25 Cent',
           date: 'Dec 3,2011'
       }
   ]
};

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish = DISH;

  selectedDish = DISH;


  constructor() { }

  ngOnInit() {
  }

}
