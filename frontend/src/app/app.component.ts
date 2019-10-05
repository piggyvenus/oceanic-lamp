import { Component } from '@angular/core';
import { EnvService } from './env.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oceanic-lamp';
  constructor(
    private env: EnvService
  ) {
    if(env.enableDebug) {
      console.log('Debug mode enabled!');
    }
  }
}
