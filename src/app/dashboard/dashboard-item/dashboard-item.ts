import { Component, input, Input } from '@angular/core';
// import { NgClass } from "../../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-dashboard-item',
  // imports: [NgClass],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
  // host: {
  //   class: 'dashboard-item'
  // }
})
export class DashboardItem {
  //   @Input({required:true}) image!: {
  //     src: string;
  //     alt: string;
  //   };
  //   @Input({ required: true }) title!: string;
  // 
  image = input.required<{ src: String; alt: string }>();
  title = input.required<string>()
}
  
