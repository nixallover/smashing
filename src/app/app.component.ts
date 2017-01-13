import { Component } from '@angular/core';

import { BlenderService } from './blender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BlenderService]
})
export class AppComponent {
  public title = 'Smush!';
  constructor(private blenderSvc: BlenderService) { }
}
