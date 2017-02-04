import { Component, OnInit } from '@angular/core';

import { BlenderService } from '../blender.service';

@Component({
  selector: 'app-blender',
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.scss'],
  providers: []
})
export class BlenderComponent implements OnInit {
  private isBlended: boolean;
  private shared: any;

  constructor(private blenderSvc: BlenderService) {
    this.shared = blenderSvc.shared;
   }

  public ngOnInit() {
    this.isBlended = false;
  }

  private blend(): void {
    console.log('blending ingredients!');
    this.isBlended = true;
  }

}
