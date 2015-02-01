var app = new ZepWeb({
    language: appLang, // defined in index.html
    ngApp: "app"
});

app.angular.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: app.getTemplate('pages/home.html'),
            controller: 'mainController'
        })
        .when('/team', {
            templateUrl: app.getTemplate('pages/team.html'),
            controller: 'teamController'
        })
        .when('/get-started', {
            templateUrl: app.getTemplate('pages/get-started.html'),
            controller: 'getStartedController'
        });

    $locationProvider.html5Mode(true);
});

app.angular.controller('mainController', function ($scope, $http, $cookieStore) {

});

app.angular.controller('initController', function ($scope, $http, $cookieStore) {

    var userLanguage = ZepWeb.detectLanguage();
    // check if the user has already a session : do nothing
    // if the users comes for the fist time we start the session and we redirect it to the good language.

    if (!$cookieStore.get("zep-session")) {
        $cookieStore.put("zep-session", 1);
        // if currently we are not in the good language, we redirect (only the first time)
        if (userLanguage !== app.language) {
            window.location.replace("/langs/" + userLanguage + "/");
        }
    }

    $http.get('https://api.github.com/repos/phalcon/zephir/releases').then(function (result) {
        $scope.latestRelease = result.data[0];
    });

});

app.angular.controller('teamController', function ($scope) {
});

app.angular.controller('getStartedController', function ($scope) {
});
