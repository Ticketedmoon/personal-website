import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-body-context-image',
  templateUrl: './body-context-image.component.html',
  styleUrls: ['./body-context-image.component.css']
})
export class BodyContextImageComponent implements OnInit {

  videoTag;

  constructor(private sanitizer: DomSanitizer) { 	
    this.videoTag = this.getVideoTag();
  }

  ngOnInit() {}

  private getVideoTag() {
    return this.sanitizer.bypassSecurityTrustHtml(
	  `<video autoplay muted loop playsinline disableRemotePlayback id="video-background">
            <source src="../../assets/stock-videos/background-animation.mp4" type="video/mp4">
        </video>`
	);
  }

}
