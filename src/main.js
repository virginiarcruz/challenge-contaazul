import * as angular from 'angular'
import 'angular-ui-router'

import app from './App'
import fleetPage from './modules/fleet/FleetPage'

angular.module('app', ['ui.router'])
.components( { app, fleetPage })
.config(['$stateProvider', ({ state }) => {

    state('fleet', {
        url: '',
        component: 'fleetPage'
    })

}]);

// bootstrap aplication
angular.bootstrap(document, ['app'])
