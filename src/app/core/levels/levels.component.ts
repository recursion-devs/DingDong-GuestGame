import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {

  levels = [1,2,3,4,5,6,7,8,9,10]

  constructor() { }

  ngOnInit() {
  }

  onClickLevel(item){
    console.log(item)
  }
}
