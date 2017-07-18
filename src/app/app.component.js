"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <div class=\"container col-md-12\" ng-app=\"myApp\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"container col-md-10 brd\" >\n            <div class=\"row bg-info text-blue\">\n                <div class=\"col-md-3 bg-info text-blue\">\n                    <div>\n                        <h3 class=\"task-header\">Tasks And Reminder</h3>\n                    </div>\n                    <div>\n                        <h5 class=\"description-header\">Create New Task And Set Reminders</h5>\n                    </div>\n                </div>\n                <div class=\"col-md-1 bg-info text-blue my-icon\">\n                    <a href=\"#!/view2\" class=\"icon-link\" id=\"myIcon\"><span class=\"glyphicon glyphicon-plus-sign\" ></span></a>\n                </div>\n            </div>\n            <div ng-view></div>\n            <br>\n\n        </div>\n    </div>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css',]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map