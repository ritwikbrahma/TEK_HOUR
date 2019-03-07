import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4/adal.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private adalSvc: AdalService) {
    this.adalSvc.init(environment.adalConfig);
  }
  title = 'TEKHOUR-UI';
  ngOnInit(): void {
    this.adalSvc.handleWindowCallback();
  }
}
