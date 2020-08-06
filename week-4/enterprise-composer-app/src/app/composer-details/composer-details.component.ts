/*
Title: Assignment 4.4 
Author: Professor Krasso
Date: 1 August 2020
Modified By: Brendan Mulhern
Description: It's the enterprise-composer  project!
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ComposerService } from '../composer.service'
import { Observable } from 'rxjs'
import { composer } from '../composer.interface'
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composers: composer;
  constructor(router: ActivatedRoute, private composerService: ComposerService) { 
    this.composerId = parseInt(this.router.snapshot.paramMap.get('composerId'), 10)
    if (this.composerId) {
      this.composers = new composer().composerService.getComposers(this.composerId)
    }
  }
  ngOnInit(): void {
  }

}
