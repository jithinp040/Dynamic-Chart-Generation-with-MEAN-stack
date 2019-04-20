var link = angular.module('Minipro', ['ngRoute']);
link.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'login'
        })
        .when('/reg', {
            templateUrl: 'register.html',
            controller: 'register'
        })
        .when('/main', {
            templateUrl: 'main.html',
            controller: 'main',
        })
}]);
var code='0';
link.controller('login', ['$scope', '$http', function ($scope, $http) {
    $scope.$parent.stat = "ng-hide";
    $scope.stats = "ng-hide";
    $scope.relink = function () {
        if(code=='200'){
        $scope.stats = "ng-hide";
        $scope.$parent.stat = "ng-show";
        window.location = "#!/main"}
        else{
            $scope.stats = "modal ng-hide";
        }
    }
    $scope.login = function () {
        if($scope.loginform.name==undefined||$scope.loginform.pass==undefined){return 0;}
        $http({
            method: 'POST',
            url: '/logins',
            data: $scope.loginform,
        }).then(function success(response) {
            console.log(response.data);
            $scope.message = response.data.text;
            code=response.data.code;
            $scope.$parent.uname=$scope.loginform.name;
        }, function failure(response) {
            $scope.message = "Error";
        });
        $scope.stats = "modal";
    }

}]);
link.controller('register', ['$scope', '$http', function ($scope, $http) {
    $scope.validemail = true;
    $scope.validpass = true;
    $scope.samepass = true;
    $scope.stats = "modal ng-hide";
    var regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    $scope.emailcheck = function () {

        if ($scope.regform.email.match(mailformat)) {
            $scope.validemail = true; 
            console.log($scope.regform.$invalid);
            console.log($scope.regform.$pending);
        } else {
            $scope.validemail = false;
        }
    }

    $scope.passcheck = function () {
        if ($scope.regform.pass.match(regpass)) {
            $scope.validpass = true;
        } else {
            $scope.validpass = false;
        }
    }
    $scope.$parent.stat = "ng-hide";
    $scope.passequ = function () {
        console.log($scope.regform.pass);
        console.log($scope.regform.cpsd);
        if ($scope.regform.pass == $scope.regform.cpsd) {
            $scope.samepass = true;
        } else {
            $scope.samepass = false;
        }
        $scope.registration = function () {
            console.log($scope);
            if(($scope.samepass == false || $scope.validpass == false || $scope.validemail == false)){$scope.message="Please Fill the form correctly";$scope.stats = "modal";return 0;}
            $http({
                method: 'POST',
                url: '/registration',
                data: $scope.regform
            }).then(function success(response) {
                console.log(response);
                $scope.message = response.data.text;
                code=response.data.code;
            }, function failure(response) {
                console.log(response);
                $scope.message = "Error";
            });
            $scope.stats = "modal";
        }
        $scope.relink = function () {
            if(code=='200'){
            $scope.stats = "modal ng-hide";
            $scope.$parent.stat = "ng-show";
            window.location = "#!/"}
            else{
                $scope.stats = "modal ng-hide";
            }
        }
    };
    //console.log(passequ())
}]);
link.controller('main', ['$scope', '$http', function ($scope, $http) {
    console.log($scope.$parent.uname);
    $scope.stats="ng-hide";
    $scope.report = [];
    $scope.sidebar = false;
    function graph(da) {
        var row = [];
        var column = [];
        for (var i in da[0]) {
            row.push(da[0][i]);        
        }
        for (var i in da[1]){
            if(da[1][i]==null){$scope.message="Data is not available";$scope.stats="modal";return 0;}
            column.push(da[1][i]);
        }
        console.log(row);console.log(column);
        var chartdata = {
            labels: row,
            datasets: [
                {
                    label:'',
                    fill:false,
                    borderColor: '#46d5f1',
                    hoverBackgroundColor: '#CCCCCC',
                    hoverBorderColor: '#666666',
                    data: column
                }
            ]
        };
        var graphTarget = $("#graph");
        var barGraph = new Chart(graphTarget, {
            type: 'line',
            data: chartdata
        });
    }
    var details ={
        name:$scope.$parent.uname,
        year:''
    }
    console.log(details);
    $scope.detail = function(docname){
        details.year=docname;
        $scope.docname = docname;
        $http({
            method: 'POST',
            url: '/details',
            data: details
        }).then(function success(response) {
            console.log(response);
            $scope.body=response.data[2];
            graph(response.data);
        }), function failure(response) {
            console.log(response.data);
        }
        $scope.back=function(){
            $scope.stats = "modal ng-hide";
        }

    }

    $scope.$parent.stat = "ng-show";
    $http({
        method: 'POST',
        url: '/reports',
        data: details
    }).then(function success(response) {
        $scope.report.push(response.data[0]);
        console.log(response);
    }), function failure(response) {
        console.log(response.data);
    }
    $scope.sidebar = true;
    

}]);
link.controller('head', ['$scope', '$http', function ($scope) {
    $scope.stat = "ng-hide";
}])