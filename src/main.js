window.jQuery = require('jquery')
window.$ = window.jQuery
window.Tether = require('tether')
require('bootstrap')

import angular  from 'angular'
import uiRouter from 'angular-ui-router'
import ngLocale from 'angular-i18n/pt-br'
import uiBrMask from 'angular-input-masks/br'

import app from './App'
import store from './store'
import services from './services'

import homePage  from './views/home/HomePage'
import fleetPage from './views/fleet/FleetPage'
import aboutPage from './views/about/AboutPage'

angular

.module('app', [uiRouter, ngLocale, uiBrMask, store, services])
.components( { app, homePage, fleetPage, aboutPage })

.directive('caPopover', function () {
    return {
        restrict: 'A',
        link: function ($scope, $el) {
            $($el).popover()
        }
    }
})

.config(['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    // if the path doesn't match any of the urls you configured
    // otherwise will take care of routing the user to the specified url
    $urlRouterProvider.otherwise('/home');
}])

.config(['$stateProvider', ({ state }) => {

    state('home', {
        url: '/home',
        component: 'homePage'
    })

    state('fleet', {
        url: '/fleet',
        component: 'fleetPage'
    })
    
    state('about', {
        url: '/about',
        component: 'aboutPage'
    })

}]);

// bootstrap aplication
angular.bootstrap(document, ['app'])
