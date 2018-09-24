import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-introduction-image',
    templateUrl: './introduction-image.component.html',
    styleUrls: ['./introduction-image.component.css']
})
export class IntroductionImageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        $('.image-content').animate({
            backgroundPositionY: '-=100px',
            opacity: 1,
        }, 1500);
    }

}
