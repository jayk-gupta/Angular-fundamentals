import { Component } from '@angular/core';
import { Header } from "./header/header";
import { ServerStatus } from "./dashboard/server-status/server-status";
import { Tickets } from "./dashboard/tickets/tickets";
import { Traffic } from "./dashboard/traffic/traffic";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus, Tickets, Traffic, DashboardItem],
})
export class App {
  
}
