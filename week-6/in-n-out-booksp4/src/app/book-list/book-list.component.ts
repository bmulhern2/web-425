/*
Title: Assignment 6.2
Author: Professor Krasso
Date: 15 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 4 part 1!
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service'
import { IBook } from '../book.interface'
import { Observable } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'

import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ["isbn", "title", "numOfPages", "authors"];
  IBook: Observable<IBook>;
  constructor(private dialog: MatDialog, private bookService: BooksService) { 
    this.books = bookService.getBooks()
  }
  ngOnInit(): void {
  }
  showBookDetails(isbn: string) {
    return this.IBook = this.bookService.getBook(isbn); 
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {data: {book: this.IBook}, disableClose: true})
    dialogRef.afterClosed().subscribe(result => { if (result === 'confirm'){this.IBook=null;}})
    console.log(this.IBook)
  }
}
