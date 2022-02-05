import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title:string= "My Task List";
  showAddTask:boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  toogleAddTask(){
    //console.log('toogleAdd')
    this.uiService.toogleAddTask();
  }

}
