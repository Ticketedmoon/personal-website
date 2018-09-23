import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    scroll(id) {
        console.log(`scrolling to ${id}`);
        const el = document.getElementById(id);
        el.scrollIntoView();
    }
}
