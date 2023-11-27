import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

type Location = 'home' | 'one' | 'two';

@Injectable({
  providedIn: 'root',
})
export class OpenGraphService {
  constructor(private meta: Meta) {}

  addMetaTags(location: Location) {
    // default tags
    this.meta.updateTag({ name: 'og:site_name', content: 'Site Name' });
    this.meta.updateTag({ name: 'og:url', content: window.location.href });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({
      name: 'og:description',
      content: 'Testing Open Graph tags',
    });
    this.meta.updateTag({
      name: 'og:image',
      content: `${window.location.origin}/assets/${location}.png`,
    });

    // location-specific tags
    if (location === 'home') {
      this.meta.updateTag({
        name: 'og:title',
        content: 'Home Page',
      });
    } else if (location === 'one') {
      this.meta.updateTag({
        name: 'og:title',
        content: 'Test One Page',
      });
    } else if (location === 'two') {
      this.meta.updateTag({
        name: 'og:title',
        content: 'Test Two Page',
      });
    }
  }
}
