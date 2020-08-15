/*
Title: Assignment 6.2
Author: Professor Krasso
Date: 15 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 4 part 1!
*/

import { Component, OnInit } from '@angular/core';
import { iWishlistItem } from '../wish-item.interface'

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
  items: Array<iWishlistItem> = []
  constructor() { }

  ngOnInit(): void {
  }
  updateItemHandler(item: iWishlistItem) {
    this.items.push(item)
  }
}
