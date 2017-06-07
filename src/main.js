window.jQuery = require('jquery')
window.$ = window.jQuery
window.Tether = require('tether')
require('bootstrap')

import angular  from 'angular'
import uiRouter from 'angular-ui-router'
import ngLocale from 'angular-i18n/pt-br'
import uiBrMask from 'angular-input-masks/br'
import ngPlugin from 'ng-plugin'

import app from './App'
import store from './store'
import router from './router'
import services from './services'

// pages
import homePage  from './views/home/HomePage'
import fleetPage from './views/fleet/FleetPage'
import aboutPage from './views/about/AboutPage'

angular
.module('app', [uiRouter, ngLocale, uiBrMask, store, services])
.components( { app, homePage, fleetPage, aboutPage })
.use(router)

// bootstrap aplication
angular.bootstrap(document, ['app'])
