import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  /* Slider Toggle */
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  /* Bar */
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75

  wifi = true;
  barValue = this.setBarValue();
  isChecked = true;

  get wifiValue() {
    return this.wifi;
  }

  constructor() { }

  ngOnInit() {
    this.randomValue();
  }

  public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.wifi = false;
    this.wifiValue;
  }

  randomValue() {
    setTimeout(() => {
      this.randomValue();
      this.barValue = this.setBarValue();
    }, 3000);
  }

  setBarValue() {
    return Math.random() * (50 - 10) + 10;
  }

  clear(): void {

  }

}

