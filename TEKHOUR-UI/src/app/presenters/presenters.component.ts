import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presenters',
  templateUrl: './presenters.component.html',
  styleUrls: ['./presenters.component.scss']
})
export class PresentersComponent implements OnInit {

  content: string = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quibusdam mollitia repellendus vero hic asperiores incidunt reprehenderit! Quisquam quas, ratione tempore aspernatur"

  constructor() { }

  ngOnInit() {
  }

}
