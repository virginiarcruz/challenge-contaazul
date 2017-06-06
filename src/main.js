import * as angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngLocale from 'angular-i18n/pt-br'

import app from './App'
import fleetPage from './modules/fleet/FleetPage'

angular.module('app', [uiRouter, ngLocale])
.components( { app, fleetPage })
.config(['$stateProvider', ({ state }) => {

    state('fleet', {
        url: '',
        component: 'fleetPage'
    })

}]);

// bootstrap aplication
angular.bootstrap(document, ['app'])
