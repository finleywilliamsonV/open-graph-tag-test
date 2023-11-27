import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpenGraphService } from '../../open-graph.service';

@Component({
  selector: 'app-test-one',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './test-one.component.html',
  styleUrl: './test-one.component.scss',
})
export class TestOneComponent {
  constructor(openGraphService: OpenGraphService) {
    openGraphService.addMetaTags('one');
  }
}
