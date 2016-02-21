import {Page} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

    name: string;
    id: number;

    constructor() {
        this.name = "Baszott a kurva anyááááád!!!";
        this.id = 3;
    }

}
