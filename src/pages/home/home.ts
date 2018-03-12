import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CallNumber } from '@ionic-native/call-number';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    operators: any;
    errorMessage: string;

    constructor(public navCtrl: NavController, public rest: RestProvider, private callNumber: CallNumber) {

    }

    ionViewDidLoad() {
        this.getOperators();
    }

    getOperators() {
        this.rest.getOperators()
            .subscribe(
                operators => this.operators = operators,
                error => this.errorMessage = <any>error);
    }

    sendCommand(item) {
        this.callNumber.callNumber(item.command, true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }

}