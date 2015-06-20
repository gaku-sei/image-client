/// <reference path="./typings/tsd.d.ts"/>

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import states from 'config/states';

angular.module('image', ['ui.router', 'ngMaterial'])
  .config([
    '$stateProvider', '$urlRouterProvider',
    ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      states.forEach((states, k) => {
        $stateProvider.state(k, states);
      });
    }
  ]);
