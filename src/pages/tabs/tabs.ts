import {Component} from '@angular/core';

import {AddPage} from '../add/add';
import {ContactPage} from '../contact/contact';
import {ChartPage} from '../chart/chart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChartPage;
  tab2Root = AddPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
