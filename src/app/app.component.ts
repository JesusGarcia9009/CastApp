import { Component } from '@angular/core';
import { NgCastService } from './services/ng-cast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  castingStatus: any;
  window: any;

  constructor(
    private ngCastService: NgCastService
  ) { }

  ngOnInit() {
    this.window = window;

    let ngCastService = this.ngCastService;
    this.window['__onGCastApiAvailable'] = function (isAvailable: boolean) {
      if (isAvailable) {
        ngCastService.initializeCastApi();
      }
    };

    this.castingStatus = this.ngCastService.getStatus();
  }

  openSession() {
    debugger;
    this.ngCastService.discoverDevices();
  }

  closeSession() {
    this.ngCastService.stop();
  }

}
