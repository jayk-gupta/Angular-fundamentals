import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
 class ServerStatus {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setInterval(() => {
      const random = Math.random(); // 0 -0.9999999
      // console.log(random)
      if (random < 0.33) this.currentStatus = 'online';
      else if (random < 0.66) this.currentStatus = 'offline';
      else {
        this.currentStatus = 'unknown';
    }
    }, 1000);
  }
}
