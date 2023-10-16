import { Component, OnInit, inject } from '@angular/core';
import { FormGeneratorService } from './services/form-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dynamic-forms';
  formJsonConfig!: JSON;
  formGeneratorService = inject(FormGeneratorService);

  ngOnInit(): void {
    this.formGeneratorService
      .getFormConfigJSON()
      .subscribe((formconfigJson) => {
        this.formJsonConfig = formconfigJson;
      });
  }
}
