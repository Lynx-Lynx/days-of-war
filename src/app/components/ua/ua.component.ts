import { Component } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-ua',
  templateUrl: './ua.component.html',
  styleUrls: ['./ua.component.css']
})
export class UaComponent {

  public date: string;
  public days: number;
  public preciseTime: string;

  constructor(private dateService: DateService) { 
    this.date = this.dateService.today.locale('uk').format('LL');
    this.days = this.dateService.getDaysDifference();
    this.preciseTime = this.dateService.getPreciseTimeDifference('ua');
  }

}
