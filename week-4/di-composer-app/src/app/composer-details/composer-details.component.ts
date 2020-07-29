import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ComposerService } from '../composer.service'

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;
  constructor(router: ActivatedRoute, private composerService: ComposerService) { 
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10)
    if (this.composerId) {
      this.composer = new this.composer().composerService.getComposers(this.composerId)
    }
  }
  ngOnInit(): void {
  }

}
