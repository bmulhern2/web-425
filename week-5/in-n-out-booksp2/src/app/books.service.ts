/*
Title: Assignment 5.3
Author: Professor Krasso
Date: 6 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 2!
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface'
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<IBook>
  constructor() { 
    this.books = [
      {
        "isbn": "ABC123",
        "title": "Harry Potter And The Goblet of Fire",
        "authors": ["Rowling, JK"],
        "description": "A Magical Fantasy World of Wizards",
        "numOfPages": 400
      },
      {
        "isbn": "ABC124",
        "title": "Harry Potter And The Prisoner of Azkaban",
        "authors": ["Rowling, JK"],
        "description": "A Magical Fantasy World of Wizards With Sirius Black",
        "numOfPages": 500
      },
      {
        "isbn": "ABC125",
        "title": "Lord of The Rings",
        "authors": ["Token, J.R."],
        "description": "A Magical Fantasy World of Hobbits",
        "numOfPages": 700
      },
      {
        "isbn": "ABC126",
        "title": "Into The Wild",
        "authors": ["Krakauner, Jon"],
        "description": "A Magical Fantasy World of Wizards",
        "numOfPages": 400
      },
      {
        "isbn": "ABC127",
        "title": "Harry Potter And The Sorcerer's Stone",
        "authors": ["Rowling, JK"],
        "description": "A Magical Fantasy World of Wizards and Voldemort",
        "numOfPages": 565
      }
    ]
  }
  getBooks(): Observable<IBook[]> {
    return this.books
  }
  getBook(isbn: string): <IBook> {
    for (let book of this.books) {
      if (this.book.isbn) = this.isbn {
        return this.book
      } else {
        return 'null';
      }
    }
  }
}
