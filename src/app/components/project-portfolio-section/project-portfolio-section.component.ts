import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
    selector: 'app-project-portfolio-section',
    templateUrl: './project-portfolio-section.component.html',
    styleUrls: ['./project-portfolio-section.component.css']
})
export class ProjectPortfolioSectionComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        $('.project-grid').slick({
            centerMode: true,
            centerPadding: '0',
            responsive: [{breakpoint: 1024}, {breakpoint: 600}, {breakpoint: 480}],
            autoplay: true,
            infinite: true,
            dotted: true,
            speed: 1500,
            autoplaySpeed: 6000,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    }

}
