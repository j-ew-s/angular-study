System.register(['angular2/core', 'angular2/common', 'rxjs/Rx', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    var userObservable = Rx_1.Observable.of({
                        userId: 1, userName: 'Gabriel'
                    }).delay(1000);
                    var twitterObservable = Rx_1.Observable.of([{
                            username: 'g_scavvassa', twitte: 'text test'
                        }, {
                            username: 'g_scavvassa', twitte: 'text test 2'
                        }, {
                            username: 'g_scavvassa', twitte: 'text test 3'
                        }, {
                            username: 'g_scavvassa', twitte: 'text test 4'
                        }]).delay(5000);
                    Rx_1.Observable.forkJoin(userObservable, twitterObservable)
                        .map(function (x) { return new Object({ user: x[0], twitter: x[1] }); })
                        .subscribe(function (result) { return console.log(result); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/app.component.html',
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map