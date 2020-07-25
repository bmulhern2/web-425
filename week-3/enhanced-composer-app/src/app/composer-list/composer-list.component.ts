/*
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 15 July 2020
; Modified By: Brendan Mulhern
; Description: This is the composer app.
*/
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composer: Array<IComposer>;
  constructor(composer: Array<IComposer>) {
    this.composers = new composer().getComposers();
  }
  ngOnInit(): void {
  }

}
