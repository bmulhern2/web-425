/*
Title: Assignment 5.3
Author: Professor Krasso
Date: 6 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 2!
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service'
import { IBook } from '../book.interface'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ["isbn", "title", "numOfPages", "authors"];
  IBook: <IBook>;
  constructor(private bookService: BooksService) { 
    this.books = bookService.getBooks()
  }
  ngOnInit(): void {
  }
  showBookDetails(isbn: string) {
    return this.IBook =this.bookService.getBook(isbn: string); 
    console.log(this.IBook)
  }
}
