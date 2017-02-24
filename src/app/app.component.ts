import { Component, OnInit } from '@angular/core';

import { BlenderService } from './blender.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BlenderService]
})
export class AppComponent implements OnInit {
  private titleHover: boolean = false;
  public title = 'Smashing!';
  // private loadingCompleted: boolean;

  constructor(
    private blenderSvc: BlenderService) { }

  public ngOnInit(): void {
    // this.loadingCompleted = false;
    // setTimeout(()=> this.loadingCompleted = true, 3*1000);
    
  }
}
