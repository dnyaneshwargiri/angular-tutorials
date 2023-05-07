import { Component, OnInit } from '@angular/core';
import { BackgroundSyncManager } from '../BackgroundSyncManager';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor() {}

  ngOnInit() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('offline-worker.js');
    }
  }

  registerUser() {
    // Submit the form when the user comes back online
    if (navigator.onLine) {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('password', this.password);
      fetch('/submit-form', {
        method: 'POST',
        body: formData,
      });
    } else {
      // store the form in browser cache
      navigator.serviceWorker.ready.then((registration) => {
        // Cast the registration object to include the sync property
        const syncRegistration = registration as ServiceWorkerRegistration & {
          sync: BackgroundSyncManager;
        };
        // Use the sync event to submit form data
        syncRegistration.sync.register('submit-forms');
      });
    }
  }
}
