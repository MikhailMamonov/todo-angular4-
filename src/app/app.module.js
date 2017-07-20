"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var tasks_component_1 = require("./tasks.component");
var task_detail_component_1 = require("./task-detail.component");
var task_service_1 = require("./task.service");
var task_search_component_1 = require("./task-search.component");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            angular_2_local_storage_1.LocalStorageModule.withConfig({
                prefix: 'my-app',
                storageType: 'localStorage'
            }),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            task_detail_component_1.TaskDetailComponent,
            tasks_component_1.TasksComponent,
            task_search_component_1.TaskSearchComponent
        ],
        providers: [task_service_1.TaskService, in_memory_data_service_1.InMemoryDataService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map