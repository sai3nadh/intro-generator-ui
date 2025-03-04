import { Component } from '@angular/core';
import { AiIntroService } from './ai-intro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-intro',
  templateUrl: './ai-intro.component.html',
  styleUrls: ['./ai-intro.component.css'],
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ] // ✅ If using Standalone Components, ensure FormsModule is added in main.ts

})
export class AiIntroComponent {
  videoScript: string = '';
  generatedIntro: string = '';
  loading: boolean = false;

  constructor(private aiIntroService: AiIntroService) {}

  generateIntro() {
    if (!this.videoScript.trim()) {
      alert("Please enter a script!");
      return;
    }

    this.loading = true;

    this.aiIntroService.generateIntro(this.videoScript)
      .subscribe(response => {
        this.generatedIntro = response.intro;
        this.loading = false;
      }, error => {
        console.error("Error generating intro:", error);
        alert("Failed to generate intro. Try again!");
        this.loading = false;
      });
  }
}
