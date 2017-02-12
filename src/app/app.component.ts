import { Component } from '@angular/core';

import { BlenderService } from './blender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BlenderService]
})
export class AppComponent {
  private titleHover: boolean = false;
  public title = 'Smashing!';
  constructor(private blenderSvc: BlenderService) { }
}
