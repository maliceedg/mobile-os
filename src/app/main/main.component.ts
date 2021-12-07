import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public $time: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));

  constructor() { }

  ngOnInit(): void {
  }

}
