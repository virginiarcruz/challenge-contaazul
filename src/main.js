window.jQuery = require('jquery')
window.$ = window.jQuery
window.Tether = require('tether')
require('bootstrap')

import angular  from 'angular'
import uiRouter from 'angular-ui-router'
import ngLocale from 'angular-i18n/pt-br'

import app from './App'
import store from './store'
import fleetPage from './modules/fleet/FleetPage'

angular.module('app', [uiRouter, ngLocale, store])
.components( { app, fleetPage })
.directive('caPopover', function () {
    return {
        restrict: 'A',
        link: function ($scope, $el) {
            $($el).popover()
        }
    }
})
.config(['$stateProvider', ({ state }) => {

    state('fleet', {
        url: '',
        component: 'fleetPage'
    })

}]);

// bootstrap aplication
angular.bootstrap(document, ['app'])
