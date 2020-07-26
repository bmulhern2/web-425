import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) { 
  }
  this.isLoggedIn = Boolean(this.PerformanceResourceTiming.snapshot.queryParamMap.get('isloggedIn')
  ngOnInit(): void {
  }
}
