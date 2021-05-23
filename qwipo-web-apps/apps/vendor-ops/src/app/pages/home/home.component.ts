import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'qwipo-web-apps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  database: any;
  constructor(private db: AngularFireDatabase) {}

  async ngOnInit() {
    console.log('this is home');
    await this.getOrders();
  }

  private async getOrders() {
    const mainOrders = [];
    // eslint-disable-next-line no-var
    var path = `Orders`;
    return this.db.database
      .ref(path)
      .once('value')
      .then((snapshot) => {
        const snapCustomer = snapshot.val();
        for (const key in snapCustomer) {
          const order = snapCustomer[key];
          mainOrders.push(order);
        }
        console.log('orders:::', mainOrders[0]);
        return mainOrders;
      });
  }
}
