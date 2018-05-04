import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  timezones: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.timezones = db.list('TimeZone').valueChanges();
  }
}
