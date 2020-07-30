/*
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 15 July 2020
; Modified By: Brendan Mulhern
; Description: This is the composer app.
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service'
import { FormControl } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  txtSearchControl = new FormControl("");
  composers: Observable<IComposer>;
  constructor(composers: Array<IComposer>, private composerService: ComposerService) {
    this.composers = new this.composers().composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => {
      this.filterComposers(val)})
  }
  ngOnInit(): void {
  }
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
