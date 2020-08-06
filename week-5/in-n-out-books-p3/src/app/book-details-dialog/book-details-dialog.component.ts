/*
Title: Assignment 5.4
Author: Professor Krasso
Date: 6 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 3!
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Inject } from '@angular/core'
import { IBook } from '../book.interface'

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {
  IBook;
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA)data) {
    this.book = data.book;
   }

  ngOnInit(): void {
  }

}
