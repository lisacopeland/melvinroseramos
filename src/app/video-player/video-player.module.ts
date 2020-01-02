import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  imports: [
    YouTubePlayerModule,
    FlexLayoutModule
  ],
  declarations: [VideoPlayerComponent],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
