(function() {
    angular.module("app", ["ngRoute", "ui.rCalendar"])
        .config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    controller: "calendarController",
                    templateUrl: "com/view/calendar1.html"
                })
                .when("/Home", {
                    controller: "homeController",
                    templateUrl: "com/view/home.html"
                })
                .when("/Calendar", {
                    controller: "calendarController",
                    templateUrl: "com/view/calendar1.html"
                })
        });
}());