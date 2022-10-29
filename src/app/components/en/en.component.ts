import { Component } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import * as moment from 'moment';

@Component({
  selector: 'app-en',
  templateUrl: './en.component.html',
  styleUrls: ['./en.component.css']
})
export class EnComponent {

  public date: string;
  public days: number;
  public preciseTime: string;

  constructor(private dateService: DateService) { 
    this.date = this.dateService.today.format('LL');
    this.days = this.dateService.getDaysDifference();
    this.preciseTime = this.dateService.getPreciseTimeDifference('en');
  }
}
