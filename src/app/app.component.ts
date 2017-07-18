import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="container col-md-12" ng-app="myApp">
        <div class="col-md-1"></div>
        <div class="container col-md-10 brd" >
            <div class="row bg-info text-blue">
                <div class="col-md-3 bg-info text-blue">
                    <div>
                        <h3 class="task-header">Tasks And Reminder</h3>
                    </div>
                    <div>
                        <h5 class="description-header">Create New Task And Set Reminders</h5>
                    </div>
                </div>
                <div class="col-md-1 bg-info text-blue my-icon">
                    <a href="#!/view2" class="icon-link" id="myIcon"><span class="glyphicon glyphicon-plus-sign" ></span></a>
                </div>
            </div>
            <div ng-view></div>
            <br>

        </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css', ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
