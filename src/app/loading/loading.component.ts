import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() completed: boolean;

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

}
