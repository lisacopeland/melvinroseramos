import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  playerHeight = 500;
  playerWidth = 800;
  startSeconds = 3;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        console.log('xsmall!');
        // handle XSmall breakpoint
        this.playerHeight = 200;
        this.playerWidth = 300;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        console.log('small!');
        // handle Small breakpoint
        this.playerHeight = 300;
        this.playerWidth = 600;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        console.log('medium!');
        this.playerHeight = 400;
        this.playerWidth = 700;
        // handle Medium breakpoint
      }
      if (result.breakpoints[Breakpoints.Large]) {
        console.log('large');
        this.playerHeight = 500;
        this.playerWidth = 800;
        // handle Large breakpoint
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        console.log('xlarge!');
        this.playerHeight = 500;
        this.playerWidth = 800;
        // handle XLarge breakpoint
      }
    });

    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
