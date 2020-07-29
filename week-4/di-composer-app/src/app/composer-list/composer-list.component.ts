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

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  constructor(composers: Array<IComposer>, private composerService: ComposerService) {
    this.composers = new this.composer().composerService.getComposers();
  }
  ngOnInit(): void {
  }

}
