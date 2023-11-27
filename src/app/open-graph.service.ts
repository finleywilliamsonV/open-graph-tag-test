import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

type Location = 'home' | 'test-one' | 'test-two';

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

    // location-specific tags

    // Home Page
    if (location === 'home') {
      // title
      this.meta.updateTag({
        name: 'og:title',
        content: 'Home Page',
      });
      // image
      this.meta.updateTag({
        name: 'og:image',
        content: `${window.location.origin}/assets/home.png`,
      });
    }

    // Test One Page
    else if (location === 'test-one') {
      // title
      this.meta.updateTag({
        name: 'og:title',
        content: 'Test One Page',
      });
      // image
      this.meta.updateTag({
        name: 'og:image',
        content: `${window.location.origin}/assets/${location}.png`,
      });
    }

    // Test Two Page
    else if (location === 'test-two') {
      // title
      this.meta.updateTag({
        name: 'og:title',
        content: 'Test Two Page',
      });
      // image
      this.meta.updateTag({
        name: 'og:image',
        content: `${window.location.origin}/assets/two.png`,
      });
    }
  }
}
