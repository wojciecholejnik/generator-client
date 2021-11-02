import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naviation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {}

}
