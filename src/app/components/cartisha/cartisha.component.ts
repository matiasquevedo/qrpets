import { Component, OnInit } from '@angular/core';

declare var angular: any;

@Component({
  selector: 'app-cartisha',
  templateUrl: './cartisha.component.html',
  styleUrls: ['./cartisha.component.css']
})

export class CartishaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";	
  $scope.showHello = true;
  $scope.showBye = false;
    
  $scope.toggleBye = () => {
    $scope.showBye = !$scope.showBye;
  };
});
  }

}
