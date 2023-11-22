import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpenGraphService } from '../../open-graph.service';

@Component({
  selector: 'app-test-two',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './test-two.component.html',
  styleUrl: './test-two.component.scss',
})
export class TestTwoComponent {
  constructor(openGraphService: OpenGraphService) {
    openGraphService.addMetaTags('test-one');
  }
}
