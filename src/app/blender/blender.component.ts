import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blender',
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.css']
})
export class BlenderComponent implements OnInit {
  private isBlended: boolean;

  constructor() { }

  public ngOnInit() {
    this.isBlended = false;
  }

  private blend(): void {
    console.log('blending ingredients!');
    this.isBlended = true;
  }

}
