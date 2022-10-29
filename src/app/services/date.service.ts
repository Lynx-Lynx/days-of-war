import { Injectable } from '@angular/core';
import * as moment from 'moment';
import 'moment-timezone';
import 'moment-precise-range-plugin';
import { TimeDifference } from 'src/app/models/timeDifference';

declare module 'moment' {
  function preciseDiff(start: string | Date | moment.Moment, end: string | Date | moment.Moment, convertToObject?: boolean): any;
}

@Injectable({
  providedIn: 'root'
})

export class DateService {
  private start: moment.Moment = moment('2022-02-23'); // -1 day to include 24th into calculations
  public today: moment.Moment = moment.tz(moment(), 'Europe/Kiev');

  public getDaysDifference(): number {
    return moment(this.today).diff(this.start, 'days');
  }

  public getPreciseTimeDifference(lang: string): string {
    const diff: TimeDifference = moment.preciseDiff(this.start, this.today, true);

    const dateString = {
      yearsEN: '',
      yearsUA: '',
      monthsEN: '',
      monthsUA: '',
      daysEN: '',
      daysUA: ''
    };

    if (diff.years === 1) {
      dateString.yearsEN = 'year';
      dateString.yearsUA = 'рік';
    };

    if (diff.years > 1) {
      dateString.yearsEN = 'years';
      dateString.yearsUA = diff.years < 5 ? 'роки' : 'років';
    };

    if (diff.months === 1) {
      dateString.monthsEN = 'month';
      dateString.monthsUA = 'місяць';
    };

    if (diff.months > 1) {
      dateString.monthsEN = 'months';
      dateString.monthsUA = diff.months < 5 ? 'місяці' : 'місяців';
    };

    if (diff.days === 1) {
      dateString.daysEN = 'day';
      dateString.daysUA = 'день';
    };

    if (diff.days > 1) {
      dateString.daysEN = 'days';
      dateString.daysUA = diff.months < 5 ? 'дні' : 'днів';
    };

    const yearsEN = diff.years ? diff.years + ` ${dateString.yearsEN} ` : '';
    const monthsEN = diff.months ? diff.months + ` ${dateString.monthsEN} ` : '';
    const daysEN = diff.days ? diff.days + ` ${dateString.daysEN}` : '';

    const yearsUA = diff.years ? diff.years + ` ${dateString.yearsUA} ` : '';
    const monthsUA = diff.months ? diff.months + ` ${dateString.monthsUA} ` : '';
    const daysUA = diff.days ? diff.days + ` ${dateString.daysUA}` : '';

    return lang === 'en' 
      ? `${yearsEN}${monthsEN}${daysEN}` 
      : `${yearsUA}${monthsUA}${daysUA}`;
  }

}
