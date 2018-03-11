/**
 * @author Pavithra S 
 * @since 2018-03-11
 */
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { TableService } from './table.service';
import { Subscription } from 'rxjs/Subscription';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { element } from 'protractor';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})

export class TableComponent implements OnInit, OnDestroy {

  private apiSubscriber: Subscription = undefined;
  private subscription: Subscription = undefined;
  private intervelApiSubscriber: Subscription = undefined;

  public data: any = [];
  public filterQuery: string = "";
  public rowsOnPage: number = 10;
  public sortBy: string = "id";
  public sortOrder: string = "asc";

  constructor(private _service: TableService, private zone: NgZone) { }

  ngOnInit(): void {
    this.loadGridData();
    // this.callByInterval();
  }

  private loadGridData(): void {
    this.data = this._service.getAPIData('sample-user-data');

    // this.apiSubscriber = this._service.getAPIData('sample-user-data').subscribe(data => {
    //   console.info("Data : " + JSON.stringify(data));
    //   this.zone.run(() => {
    //     this.data = data;
    //   });
    // },
    //   error => {
    //     console.error(JSON.stringify(error));
    //   }
    // );
  }

  private callByInterval() {
    this.data.map(element => {
      let id = element.id;
      let timer = TimerObservable.create(0, 5000);
      this.subscription = timer.subscribe(() => {
        this.intervelApiSubscriber = this._service.getAPIData('user-online-status?id=' + id).subscribe(data => {
          console.info("Data : " + JSON.stringify(data));
          this.zone.run(() => {
            this.data[id - 1].onlineStatus = data.onlineStatus;
          });
        },
          error => {
            console.error(JSON.stringify(error));
          }
        );
      });
    });
  }

  ngOnDestroy(): void {
    if (this.apiSubscriber != undefined) {
      this.apiSubscriber.unsubscribe();
    }
    if (this.intervelApiSubscriber != undefined) {
      this.intervelApiSubscriber.unsubscribe();
    }
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

}
