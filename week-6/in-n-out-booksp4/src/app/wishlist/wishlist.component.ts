/*
Title: Assignment 6.2
Author: Professor Krasso
Date: 15 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 4 part 1!
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iWishlistItem } from '../wish-item.interface'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  item: iWishlistItem
  @Output() addItemEmitter = new EventEmitter<iWishlistItem>();
  constructor() { 
    this.wishlistItem = {} as iWishlistItem;
  }
  ngOnInit(): void {
  }
  addItem() {
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors })
    this,item = {} as iWishlistItem;
  }

}
