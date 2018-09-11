import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-body-context-video',
  templateUrl: './body-context-video.component.html',
  styleUrls: ['./body-context-video.component.css']
})
export class BodyContextVideoComponent implements OnInit {

  videoTag;

  constructor(private sanitizer: DomSanitizer) { 	
    this.videoTag = this.getVideoTag();
  }

  ngOnInit() {}

  private getVideoTag() {
    return this.sanitizer.bypassSecurityTrustHtml(
	  `<video autoplay muted loop playsinline disableRemotePlayback id="video-background">
            <source src="../../../assets/stock-videos/buckle-animation.mp4" type="video/mp4">
        </video>`
	);
  }

}
