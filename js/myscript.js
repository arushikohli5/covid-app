const URL="https://covid19.mathdro.id/api";

let app=angular.module("MyApp",[]);

app.controller('MyCtrl',($scope, $http)=>{
    //contoller
    $scope.title="Stay home Stay Safe";
    console.log('App loaded');

    //calling api
    $http.get(URL).then(
        (response)=>{
            console.log(response.data);
            $scope.all_data=response.data;
    },
    (error)=>{
        console.log(error);
    });
});