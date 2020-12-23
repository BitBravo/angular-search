import { Component, Input } from '@angular/core';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  @Input() cardData: Video;

  getParams(cardData: Video, field: string = 'title'): string {
    const { coverImage, title } = cardData || {};
    if (field === 'image') {
      return coverImage?.medium;
    } else if (field === 'color') {
      return coverImage?.color;
    }
    return title?.native || title?.english;
  }

  navigateItem(url: string): void {
    window.open(url, '_blank');
  }
}
