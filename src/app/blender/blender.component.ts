import { Component, OnInit } from '@angular/core';

import { BlenderService } from '../blender.service';

@Component({
  selector: 'app-blender',
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.css'],
  providers: []
})
export class BlenderComponent implements OnInit {
  private isBlended: boolean;

  constructor(private blenderSvc: BlenderService) { }

  public ngOnInit() {
    this.isBlended = false;
  }

  private blend(): void {
    console.log('blending ingredients!');
    this.isBlended = true;
  }

}
