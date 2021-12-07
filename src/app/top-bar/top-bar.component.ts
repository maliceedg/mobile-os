import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SettingsComponent } from "../settings/settings.component";


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private settingsComponent: SettingsComponent) {
  }

  battery = 100;

  countDown() {
    if(this.battery > 0) {
      setTimeout(() => {
        this.battery--;
        this.countDown();
      }, 7000);
    }
    else {
      this.battery = 0;
    }
  }

  wifi = this.settingsComponent.wifiValue;

  ngOnInit(): void {
    this.countDown();
  }

}
