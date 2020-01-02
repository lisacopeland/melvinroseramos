import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  imports: [
    YouTubePlayerModule,
  ],
  declarations: [VideoPlayerComponent],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
